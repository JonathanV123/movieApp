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
        this.displayMonth = this.displayMonth.bind(this);
        this.getDay = this.getDay.bind(this);
        this.fixed = this.fixed.bind(this);
        this.generateDayNameDays = this.generateDayNameDays.bind(this);
        this.getDayName = this.getDayName.bind(this);
        this.getDaysOfMonthV2 = this.getDaysOfMonthV2.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onMovieClick=this.onMovieClick.bind(this);
        this.hideMovieInformation=this.hideMovieInformation.bind(this);

        this.state = {
            year: new Date().getFullYear(),
            monthName: new Date().getMonth(),
            monthNumber: new Date().getMonth(),
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
            movieInformationLoaded:false,
            visible:-1,
            creditsLoaded:false,
        };
    }

    componentWillMount() {
// Performing a GET request
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a0bab1433b22d4b59bf466484c131da6&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2017-05-01&release_date.lte=2017-05-31')
            .then(function (response) {
                this.setState({
                    movieData: response.data.results
                });
            }.bind(this));
        let counterMonth = this.state.counter;
        let currentMonth = this.state.monthName;
        this.setState({
            monthName: counterMonth[currentMonth],
            monthNumber: currentMonth
        });
        this.getDay();
        this.fixed();
    }
    //Create Update Poster Here with Data Provided
    onMovieClick(movie) {
        let movieCurrent = [];
        if(movie.length >=1){
            console.log(movie);
        }else{
            axios.get('https://api.themoviedb.org/3/movie/'+ movie.id +'?api_key=a0bab1433b22d4b59bf466484c131da6&&append_to_response=credits')
                .then(function (response) {
                    let tempCastStorage = [];
                    for(let i=0; i<=0; i++){
                        for(let i=0; i<=3; i++){
                            tempCastStorage.push(response.data.credits.cast[i].name);
                        }
                    }
                    this.setState({
                        currentMovie: movieCurrent,
                        movieInformationLoaded: true,
                        visible:1,
                        currentCast:tempCastStorage,
                        currentCrew:response.data.credits.crew[0].name,
                        creditsLoaded:true,
                    });
                }.bind(this));
            movieCurrent.push(movie);
            // why undefined after setState ? console.log(this.state.currentMovie);
            //this keyword on axios call
        }
        // axios.get('https://api.themoviedb.org/3/movie/'+ movie.id +'?api_key=a0bab1433b22d4b59bf466484c131da6&&append_to_response=credits')
        //     .then(function (response) {
        //         let tempCastStorage = [];
        //         for(let i=0; i<=0; i++){
        //             for(let i=0; i<=3; i++){
        //                 tempCastStorage.push(response.data.credits.cast[i].name);
        //             }
        //         }
        //         this.setState({
        //             currentMovie: movieCurrent,
        //             movieInformationLoaded: true,
        //             visible:1,
        //             currentCast:tempCastStorage,
        //             currentCrew:response.data.credits.crew[0].name,
        //             creditsLoaded:true,
        //         });
        //     }.bind(this));
        // movieCurrent.push(movie);
       // why undefined after setState ? console.log(this.state.currentMovie);
        //this keyword on axios call
    }
    hideMovieInformation(){
        this.setState({
            visible:-1,
            movieInformationLoaded: false,
            currentMovie: {},
            currentMovieCredits:{},
            creditsLoaded: false,
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
        let monthNameCounter = this.state.counter;
        let monthNumber = this.state.monthNumber;
        let newMonthNumber = monthNumber + 1;
        if (newMonthNumber === 12) {
            newMonthNumber = 0;
            let nextYearIs = this.state.year + 1;
            this.setState({
                year: nextYearIs,
            })
        }
        this.setState({
            monthName: monthNameCounter[newMonthNumber],
            monthNumber: newMonthNumber
        });
        this.getDay();
    }

    nextMonth() {
        let monthNameCounter = this.state.counter;
        let monthNumber = this.state.monthNumber;
        let newMonthNumber = monthNumber - 1;
        if (newMonthNumber === -1) {
            newMonthNumber = 11;
            let nextYearIs = this.state.year - 1;
            this.setState({
                year: nextYearIs,
            })
        }
        this.setState({
            monthName: monthNameCounter[newMonthNumber],
            monthNumber: newMonthNumber
        });
        this.getDay();
    }

    displayMonth() {
        const counter = this.state.monthNumber;
        const monthNameName = this.state.counter;
        let monthNameIsNow = monthNameName[counter];
        this.setState({
            monthName: monthNameIsNow,
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
            numberOfDaysInMonth: initNumOfDaysInMonth
        })
    }
    render() {
        return (
            <div className="App">
                <DisplayMovieInformation
                    currentMovieDisplaying={this.state.currentMovie}
                    movieInformationLoaded={this.state.movieInformationLoaded}
                    visible={this.state.visible}
                    hideMovieInformation={this.hideMovieInformation}
                    currentMovieCast={this.state.currentCast}
                    currentMovieCrew={this.state.currentCrew}
                    creditsLoaded={this.state.creditsLoaded}
                />
                <SwitchMonthButtons
                    monthName={this.state.monthName}
                    monthNumber={this.state.count}
                    counterMonth={this.state.counter}
                    nextMonth={this.prevMonth}
                    prevMonth={this.nextMonth}
                    displayMonth={this.displayMonth}
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