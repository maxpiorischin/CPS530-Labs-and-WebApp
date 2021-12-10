import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const default_img = "https://images.unsplash.com/photo-1581081536310-c88f076b4ac4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0fHx8fHx8MTYzODY0ODQ4OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800";
const unsplah_api = (search_term) => `https://source.unsplash.com/800x450/?${encodeURI(search_term)}`;

// Simple debounce funciton from: https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const cardstyle = {
    backgroundColor: '#018786',
};

export default class FrontDemo extends Component {
    constructor() {
        super()
        this.state = {  
            search_term: "cat", 
            img_url: default_img, 
            loading: false
        };
        this.updateSearch = debounce((event) => {
            this.setState({search_term: event.target.value});
            this.apiReq();
        }, 800);
    }

    apiReq() {
        this.setState({loading: true});
        fetch(unsplah_api(this.state.search_term)).then(resp => this.setState({img_url: resp.url, loading: false}));        
    }

    render() {
        return (
            <><Card sx={{ maxWidth: 345 }} style={cardstyle}>
                <CardMedia component="img" height="207" image={this.state.img_url} alt="random"/>
                <CardContent>
                    <Typography gutterBottom variant="body1" pb={1}>
                        Random {this.state.search_term}
                    </Typography>
                    <TextField id="search_term" label="Search Term" defaultValue={this.state.search_term} onChange={this.updateSearch} disabled={this.state.loading}/>
                </CardContent>
            </Card></>
        );
    }
}
