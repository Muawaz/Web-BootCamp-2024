class Post { 
    constructor(content) { 
        this.content = content; 
        this.likes = 0; 
        this.shares = 0; 
        this.comments = []; 
    } 
    addLike() { 
        this.likes++; 
    } 
    addShare() { 
        this.shares++; 
    } 
    addComment(comment) { 
        this.comments.push(comment); 
    } 
    getMetrics() { 
        return { 
            likes: this.likes, 
            shares: this.shares, 
            comments: this.comments.length 
        }; 
    } 
} 

// Example usage 
const post = new Post('Check out this new feature!'); 
post.addLike(); 
post.addShare(); 
post.addComment('Great feature!'); 
console.log(post.getMetrics()); 
metric = post.getMetrics()
// Output: { likes: 1, shares: 1, comments: 1 }
likes = metric['likes']
shares = metric['shares']
comments = metric['comments']



var Chart = require('cli-chart');
var chart = new Chart({
    xlabel: 'count',
    ylabel: 'metrics',
    direction: 'y',
    width: Math.max(likes, shares, comments) + 2,
    height: Math.max(likes, shares, comments) + 2,
    lmargin: 15,
    step: 4
});
 
// chart.addBar(3, 'red');
chart.addBar(likes).addBar(shares).addBar(comments)
//.addBar(13).addBar(15).addBar(16);
chart.draw();   

var config = {};
var chart = new Chart(config);
process.exit()