function solve(input) {
 
    let webComments = {};
    let users = [];
    let articles = [];
 
    while (input.length > 0) {
        let tokens = input.shift();
 
        if (tokens.includes('user')) {
            tokens = tokens.split(' ');
            tokens.shift();
            let userName = tokens.join('');
            users.push(userName);
 
        } else if (tokens.includes('article')) {
            tokens = tokens.split(' ');
            tokens.shift();
            let articleName = tokens.join('');
            articles.push(articleName);
 
        } else if (tokens.includes(':')) {
            tokens = tokens.split(': ');
            let userAndArticleInfo = tokens[0].split(' ');
            let userName = userAndArticleInfo.shift();
            let article = userAndArticleInfo.pop();
            let titleAndComment = tokens[1].split(', ');
            let title = titleAndComment.shift();
            let comment = titleAndComment.pop();
 
            if (users.includes(userName) && articles.includes(article)) {
                if (!webComments.hasOwnProperty(article)) {
                    webComments[article] = [];
                }
                webComments[article].push({
                    user: userName,
                    comment: {
                        title,
                        comment
                    }
                });
            }
        }
    }

    let sortedByCountOfComments = Object.keys(webComments)
    .sort((a, b) => Object.values(webComments[b]).length - Object.values(webComments[a]).length)
    .map(article => {
        console.log(`Comments on ${article}`);
 
        let sortedUsers = webComments[article]
        .sort((a, b) => a.user.localeCompare(b.user))
        .map(user => console.log(`--- From user ${user.user}: ${user.comment.title} - ${user.comment.comment}`));
    });
}
