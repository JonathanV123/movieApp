import React from 'react';
import SwitchMonthButtons from './components/SwitchMonthButtons.js';
import RenderDaysInMonth from './components/RenderDaysInMonth.js';
import DisplayMovieInformation from './components/DisplayMovieInformation.js';
import axios from 'axios';
import './App.css';

const DAYS_OF_WEEK = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
class App extends React.Component {
    constructor() {
        super();
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.getDay = this.getDay.bind(this);
        this.fixed = this.fixed.bind(this);
        this.generateDayNameDays = this.generateDayNameDays.bind(this);
        this.getDayName = this.getDayName.bind(this);
        this.getDaysOfMonthV2 = this.getDaysOfMonthV2.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onMovieClick=this.onMovieClick.bind(this);
        this.hideMovieInformation=this.hideMovieInformation.bind(this);
        this.renderCurrentMovieModal=this.renderCurrentMovieModal.bind(this);
        this.addZeroForProperAjaxSearch=this.addZeroForProperAjaxSearch.bind(this);


        this.state = {
            year: new Date().getFullYear(),
            monthName: new Date().getMonth(),
            monthNumber: new Date().getMonth(),
            date:null,
            currentDay: null,
            numberOfDaysInMonth: null,
            counter: {
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
            },
            firstDay: null,
            lastDay: null,
            dayNameDays: this.generateDayNameDays(),
            movieData:[],
            ajaxDataReceived: false,
        };
    }

    componentWillMount() {
        let counterMonth = this.state.counter;
        let currentMonth = this.state.monthName;
        this.setState({
            monthName: counterMonth[currentMonth],
            monthNumber: currentMonth
        });
        this.getDay();
        this.fixed();
        //Set State in getday was not loading in time for the ajax call so had to move in date methods into here as well.
        let year = this.state.year;
        let month = this.state.monthNumber;
        //Get first and last day of month
        let initNumOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        //End of Get Day date methods
        // Performing a GET request to grab initial movie data for the month
        if(this.state.monthNumber.toString().length < 2){
            this.addZeroForProperAjaxSearch();
        }
        debugger;
        let b = "05";
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a0bab1433b22d4b59bf466484c131da6&language=en-US&region=US&
        sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${this.state.year.toString()}-06-01&release_date.lte=${this.state.year.toString()}-06-30&with_release_type=3`)
            .then(function (response) {
                console.log(response.data.results);
                this.setState({
                    movieData: response.data.results
                });
            }.bind(this));
    }
    addZeroForProperAjaxSearch(){
        let zero = "0";
        let monthNumber = this.state.monthNumber.toString();
        return zero.concat(monthNumber);
    }
    onMovieClick(movie) {
            //Get Movie ID
            console.log("onMovieClickgotcalled");
            axios.get('https://api.themoviedb.org/3/movie/'+ movie.id +'?api_key=a0bab1433b22d4b59bf466484c131da6&&append_to_response=credits')
                .then(function (response) {
                    console.log("In callback now");
                    let castNames = response.data.credits.cast.map((castMember)=>{
                        return castMember.name
                    });
                    console.log(castNames);
                    this.setState({
                        selectedMovie: movie,
                        castMembers:castNames,
                        currentCrew:response.data.credits.crew[0].name,
                    });
                    // this.renderCurrentMovieModal();
                }.bind(this));
            // why undefined after setState ? console.log(this.state.currentMovie);
            // this keyword on axios call
    }
    //Hide movie info pop up when exit button is clicked
    hideMovieInformation(){
        this.setState({
            selectedMovie: {},
            currentMovieCredits:{},
        });
    }
    fixed() {
        var dayNameDays = this.generateDayNameDays();
        var daysOfMonth = this.getDaysOfMonthV2();
        var firstDateInMonth = daysOfMonth[0];
        var nullDate = {
            getDate: () => {},
            getMonth: () => {},
            getYear: () => {}

        };

        var i = 0;
        while (i < firstDateInMonth.getDay()) {
            dayNameDays[DAYS_OF_WEEK[i]].push(nullDate);
            i++;
        }
        daysOfMonth.forEach((dateInMonth) => {
            dayNameDays[this.getDayName(dateInMonth)].push(dateInMonth)
        });
        this.setState({dayNameDays: dayNameDays});
    }

    generateDayNameDays() {
        var dayNameDays = {};
        DAYS_OF_WEEK.forEach((dayName) => {
            dayNameDays[dayName] = [];
        });
        return dayNameDays;
    }

    getDayName(date) {
        return DAYS_OF_WEEK[date.getDay()];
    }

    getDaysOfMonthV2() {
        var daysInMonth = [];
        //first day of this.state.monthNumber
        var date = new Date(this.state.year, this.state.monthNumber);
        while (date.getMonth() === this.state.monthNumber) {
            daysInMonth.push(new Date(date));
            date.setDate(date.getDate() + 1)
        }
        return daysInMonth
    }

    prevMonth() {
        let monthName = this.state.counter;
        let date = new Date(this.state.year,this.state.monthNumber);
        var prevMonth = date.setMonth(date.getMonth() - 1);
        var newPrevMonth = new Date(prevMonth);
        let newPrevMonthNum = newPrevMonth.getMonth();
        let initNumOfDaysInMonth = new Date(this.state.year, newPrevMonthNum + 1, 0).getDate();
        this.setState({
            monthNumber: newPrevMonthNum,
            monthName: monthName[newPrevMonthNum],
            numberOfDaysInCurrentMonth: initNumOfDaysInMonth,
        });
    }

    nextMonth() {
        let monthName = this.state.counter;
        let date = new Date(this.state.year,this.state.monthNumber);
        var prevMonth = date.setMonth(date.getMonth() + 1);
        var newNextMonth = new Date(prevMonth);
        let newNextMonthNum = newNextMonth.getMonth();
        let initNumOfDaysInMonth = new Date(this.state.year, newNextMonthNum + 1, 0).getDate();
        this.setState({
            monthNumber: newNextMonthNum,
            monthName: monthName[newNextMonthNum],
            numberOfDaysInCurrentMonth: initNumOfDaysInMonth,
        });
    }
    getDay() {
        let year = this.state.year;
        let month = this.state.monthNumber;
        let day = new Date().getDay();
        //Get first and last day of month
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let initNumOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        this.setState({
            currentDay: day,
            firstDay: firstDay,
            lastDay: lastDay,
            numberOfDaysInMonth: initNumOfDaysInMonth,
        })
    }
    renderCurrentMovieModal(){
        // Selected Movie is not updated in state from OnMovieClick (first click only)
        // Second click sets the state. For now passing in currentMovie from OnClick;
        if(this.state.selectedMovie) {
            console.log("Returning Display Movie Information");
            return (
                <DisplayMovieInformation
                    selectedMovie={this.state.selectedMovie}
                    hideMovieInformation={this.hideMovieInformation}
                    currentMovieCast={this.state.castMembers}
                    currentMovieCrew={this.state.currentCrew}
                />
            )
        }
    }
    render() {
        return (
            <div className="App">
                {this.renderCurrentMovieModal()}
                <SwitchMonthButtons
                    monthName={this.state.monthName}
                    monthNumber={this.state.count}
                    counterMonth={this.state.counter}
                    nextMonth={this.prevMonth}
                    prevMonth={this.nextMonth}
                />
                <RenderDaysInMonth
                    theCurrentYear={this.state.year}
                    theCurrentMonth={this.state.monthNumber}
                    firstDay={this.state.firstDay}
                    lastDay={this.state.lastDay}
                    currentDay={this.state.currentDay}
                    numberOfDaysInMonth={this.state.numberOfDaysInMonth}
                    dayNameDays={this.state.dayNameDays}
                    movieData={this.state.movieData}
                    onMovieClick={this.onMovieClick}
                />
            </div>
        );
    }
}
export default App;

console.log("App");