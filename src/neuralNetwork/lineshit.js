const R = require('ramda');

X_MAX = 400;
Y_MAX = 400;

rand = (high, low) => Math.random() * (high - low) + low;
let randomPoints = R.range(0, 100).map(_ =>
    ({
        x: rand(0, X_MAX),
        y: rand(0, Y_MAX)
    }));
team = point => point.x > point.y ? 1 : -1;

let randomWeights = ({
    x: rand(-1, 1),
    y: rand(-1, 1),
});

guess = (weights, point) => {
    const sum =
        point.x * weights.x +
        point.y * weights.y;
    const team = sum >= 0 ? 1 : -1;
    return team
};
trainFunction = (weights, points, team) => {
    const gusseResult = guess(weights, points);
    const error = team - gusseResult;
    return {
        x: weights.x + (points.x * error),
        y: weights.y + (points.y * error),
    }
};
 trainedWeights = () => {
    const example1 = {x:721 , y:432};
    const example2 = {x:211 , y:122};
    const example3 = {x:328 , y:833};
    const example4 = {x:900 , y:400};
    let trainedWeights;
     trainedWeights = trainFunction(randomWeights, example1, team(example1));
     trainedWeights = trainFunction(trainedWeights, example2, team(example2));
     trainedWeights = trainFunction(trainedWeights, example3, team(example3));
     trainedWeights = trainFunction(trainedWeights, example4, team(example4));
     return trainedWeights

};

// testGuse = guess(randomWeights, {x:300 , y: 400});

module.exports = `
<svg width="${X_MAX}" height="${Y_MAX}">
    ${randomPoints.map(point =>
    `<circle
    cx="${point.x}"
    cy="${point.y}"
    r="5"
    fill="${guess(trainedWeights(), point) === -1 ? 'blue' : 'red'}"
    />
<line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="red"  />
`
)}
</svg>`;
