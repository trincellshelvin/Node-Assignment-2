import { seasons } from './seasons.js';
import { comfortFoods } from './comfort.js';
import { checkbox, input } from '@inquirer/prompts';

async function runSurvey() {
    const userName = await input({ message: 'Enter your name:' });
    console.log(`Hello ${userName}, welcome to the seasonal comfort food survey!`);

    const favoriteSeason = await checkbox({
        message: 'Select your favorite season(s):',
        choices: seasons.map(season => ({ name: season, value: season }))
    });

    favoriteSeason.forEach(season => {
        console.log(`\nFor ${season}, the comfort foods are: ${comfortFoods[season].join(', ')}`);
    });

    console.log('\nThank you for participating in the survey!');
}

runSurvey();