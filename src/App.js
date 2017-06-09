import React from 'react';
import SwitchMonthButtons from './components/SwitchMonthButtons.js';
import RenderDaysInMonth from './components/RenderDaysInMonth.js';
import DisplayMovieInformation from './components/DisplayMovieInformation.js';
import MultipleMovieModal from './components/MultipleMovieModal.js';
import axios from 'axios';
import './App.css';

const DAYS_OF_WEEK = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const SHORT_MONTH_NAMES ={
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "June",
        6: "Jul",
        7: "Aug",
        8: "Sept",
        9: "Oct",
        10: "Nov",
        11: "Dec"
};
class App extends React.Component {
    constructor() {
        super();
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.getDay = this.getDay.bind(this);
        this.addDaysToArrayCollection = this.addDaysToArrayCollection.bind(this);
        this.generateDayNameDays = this.generateDayNameDays.bind(this);
        this.getDayName = this.getDayName.bind(this);
        this.getDaysOfMonthV2 = this.getDaysOfMonthV2.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onMovieClick = this.onMovieClick.bind(this);
        this.hideMovieInformation = this.hideMovieInformation.bind(this);
        this.renderCurrentMovieModal = this.renderCurrentMovieModal.bind(this);
        this.addZeroForProperAjaxSearch = this.addZeroForProperAjaxSearch.bind(this);
        this.multipleMovieModal = this.multipleMovieModal.bind(this);


        this.state = {
            year: new Date().getFullYear(),
            monthName: new Date().getMonth(),
            monthNumber: new Date().getMonth(),
            dayNameDays: this.generateDayNameDays(),
            movieData: [],
        };
    }

    componentWillMount() {
        let currentMonth = this.state.monthName;
        this.setState({
            monthName: SHORT_MONTH_NAMES[currentMonth],
            monthNumber: currentMonth
        });
        this.getDay();
        this.addDaysToArrayCollection();
        //Set State in getday was not loading in time for the ajax call so had to move in date methods into here as well.
        let year = this.state.year;
        let month = this.state.monthNumber;
        //Get first and last day of month
        let initNumOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        let string = initNumOfDaysInMonth.toString();
        this.setState({
            numberOfDaysInCurrentMonth: string,
        });
        //End of Get Day date methods
        // Performing a GET request to grab initial movie data for the month
        if (this.state.monthNumber.toString().length < 2) {
            this.addZeroForProperAjaxSearch();
        }
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a0bab1433b22d4b59bf466484c131da6&language=en-US&region=US&
        sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${this.state.year.toString()}-${this.state.monthNumber + 1}-01&release_date.lte=${this.state.year.toString()}-${this.state.monthNumber + 1}-${string}&with_release_type=3`)
            .then(function (response) {
                this.setState({
                    movieData: response.data.results
                });
            }.bind(this));
    }

    addZeroForProperAjaxSearch() {
        let zero = "0";
        let monthNumber = this.state.monthNumber.toString();
        return zero.concat(monthNumber);
    }
    multipleMovieModal(movieData){
        if (movieData) {
            this.setState({
                multipleMovieModalData:movieData,
            }, function () {
                console.log(this.state.multipleMovieModalData);
            });
        }
    }
    onMovieClick(movie) {
        //Get Movie ID
        axios.get('https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=a0bab1433b22d4b59bf466484c131da6&&append_to_response=credits,videos')
            .then(function (response) {
                let castNames = response.data.credits.cast.map((castMember) => {
                    return castMember.name
                });
                let trailerLink = response.data.videos.results.map((linkID) => {
                    return linkID.key
                });
                let officialTrailerKey = trailerLink.pop();
                let getDirector = response.data.credits.crew.reduce(function (all, item, index) {
                    if (item.job === 'Director') {
                        all.push(item.name);
                    }
                    return all
                }, []);
                this.setState({
                    selectedMovie: movie,
                    castMembers: castNames,
                    currentCrew: getDirector,
                    trailerLink: officialTrailerKey,
                    multipleMovieModalData:null,
                });
            }.bind(this));
    }

    //Hide movie info pop up when exit button is clicked
    hideMovieInformation() {
        this.setState({
            selectedMovie: null,
            castMembers: null,
            currentCrew: null,
            trailerLink: null,
            multipleMovieModalData:null,
        });
    }

    addDaysToArrayCollection() {
        //DayNameDays returns an object keyed by day name. Each day name has an empty array
        var dayNameDays = this.generateDayNameDays();
        //Days of month returns each day in current month
        var daysOfMonth = this.getDaysOfMonthV2();
        //First day in month is index 0 in array retyrned from getDaysOfMonthV2
        var firstDateInMonth = daysOfMonth[0];
        //create null object to act as last days of previous month in calendar view
        //attaching functions so program won't fail
        var nullDate = {
            getDate: () => {
            },
            getMonth: () => {
            },
            getYear: () => {
            }

        };

        var i = 0;
        //Add Null Dates to array
        while (i < firstDateInMonth.getDay()) {
            dayNameDays[DAYS_OF_WEEK[i]].push(nullDate);
            i++;
        }
        daysOfMonth.forEach((dateInMonth) => {
            //Get index to push into. Once found push that date into it
            dayNameDays[this.getDayName(dateInMonth)].push(dateInMonth)
        });
        //Set state of all collected dates
        this.setState({dayNameDays: dayNameDays});
    }
    //Create an object that is keyed by the name of the days. Each containing an empty array for future date storage
    // of that particular day.
    generateDayNameDays() {
        var dayNameDays = {};
        DAYS_OF_WEEK.forEach((dayName) => {
            dayNameDays[dayName] = [];
        });
        return dayNameDays;
    }

    getDayName(date) {
        //Get the right index of Days_Of_Week to push into
        return DAYS_OF_WEEK[date.getDay()];
    }
    //While in current month, loop through each individual date in month returning an array storing all dates
    getDaysOfMonthV2() {
        var daysInMonth = [];
        //first day of this.state.monthNumber
        var date = new Date(this.state.year, this.state.monthNumber);
        while (date.getMonth() === this.state.monthNumber) {
            daysInMonth.push(new Date(date));
            //Increment to next day
            date.setDate(date.getDate() + 1)
        }
        return daysInMonth
    }

    prevMonth() {
        let monthName = SHORT_MONTH_NAMES;
        let year = this.state.year;
        let date = new Date(this.state.year, this.state.monthNumber);
        var prevMonth = date.setMonth(date.getMonth() - 1);
        var newPrevMonth = new Date(prevMonth);
        let newPrevMonthNum = newPrevMonth.getMonth();
        let initNumOfDaysInMonth = new Date(this.state.year, newPrevMonthNum + 1, 0).getDate();
        if (this.state.monthNumber === 0) {
            this.setState({
                year: year - 1
            })
        }
        this.setState({
                monthNumber: newPrevMonthNum,
                monthName: monthName[newPrevMonthNum],
                numberOfDaysInCurrentMonth: initNumOfDaysInMonth,
                movieData: [],
            },
            function () {
                this.generateDayNameDays();
                this.getDay();
                this.addDaysToArrayCollection();
            }
        );
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a0bab1433b22d4b59bf466484c131da6&language=en-US&region=US&
        sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${this.state.year.toString()}-${newPrevMonthNum + 1}-01&release_date.lte=${this.state.year.toString()}-${newPrevMonthNum + 1}-${initNumOfDaysInMonth}&with_release_type=3`)
            .then(function (response) {
                this.setState({
                    movieData: response.data.results
                });
            }.bind(this));
    }

    nextMonth() {
        let monthName = SHORT_MONTH_NAMES;
        let year = this.state.year;
        let date = new Date(this.state.year, this.state.monthNumber);
        var nextMonth = date.setMonth(date.getMonth() + 1);
        var newNextMonth = new Date(nextMonth);
        let newNextMonthNum = newNextMonth.getMonth();
        let initNumOfDaysInMonth = new Date(this.state.year, newNextMonthNum + 1, 0).getDate();
        if (this.state.monthNumber === 11) {
            this.setState({
                year: year + 1,
            })
        }
        this.setState({
                monthNumber: newNextMonthNum,
                monthName: monthName[newNextMonthNum],
                numberOfDaysInCurrentMonth: initNumOfDaysInMonth,
                movieData: [],
            },
            function () {
                this.generateDayNameDays();
                this.getDay();
                this.addDaysToArrayCollection();
            }
        );
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a0bab1433b22d4b59bf466484c131da6&language=en-US&region=US&
        sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${this.state.year.toString()}-${newNextMonthNum + 1}-01&release_date.lte=${this.state.year.toString()}-${newNextMonthNum + 1}-${initNumOfDaysInMonth}&with_release_type=3`)
            .then(function (response) {
                this.setState({
                    movieData: response.data.results
                });
            }.bind(this));
    }
    //Get number of days in current month. I don't think function is needed anymore. Flagging for refactor *******
    getDay() {
        let year = this.state.year;
        let month = this.state.monthNumber;
        let initNumOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        this.setState({
            numberOfDaysInCurrentMonth: initNumOfDaysInMonth,
        })
    }

    renderCurrentMovieModal() {
        if(this.state.multipleMovieModalData){
            return(
                <MultipleMovieModal
                    selectedMovie={this.state.selectedMovie}
                    hideMovieInformation={this.hideMovieInformation}
                    movieData={this.state.multipleMovieModalData}
                    onMovieClick={this.onMovieClick}
                />
            )
        }
        else if (this.state.selectedMovie) {
            return (
                <DisplayMovieInformation
                    selectedMovie={this.state.selectedMovie}
                    hideMovieInformation={this.hideMovieInformation}
                    currentMovieCast={this.state.castMembers}
                    currentMovieCrew={this.state.currentCrew}
                    trailerLink={this.state.trailerLink}
                />
            )
        } else {
            return (
                <div className="calendarContainer">
                    <SwitchMonthButtons
                        monthName={this.state.monthName}
                        nextMonth={this.prevMonth}
                        prevMonth={this.nextMonth}
                    />
                    <RenderDaysInMonth
                        theCurrentYear={this.state.year}
                        theCurrentMonth={this.state.monthNumber}
                        numberOfDaysInMonth={this.state.numberOfDaysInCurrentMonth}
                        dayNameDays={this.state.dayNameDays}
                        movieData={this.state.movieData}
                        onMovieClick={this.onMovieClick}
                        multipleMovieModal={this.multipleMovieModal}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="App">
                {this.renderCurrentMovieModal()}
            </div>
        );
    }
}
export default App;
