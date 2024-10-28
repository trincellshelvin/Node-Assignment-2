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

    for (const season of favoriteSeason) {
        console.log(`\nFor ${season}, please select your favorite comfort foods:`);
        const favoriteComfortFoods = await checkbox({
            message: `Select your favorite comfort foods for ${season}:`,
            choices: comfortFoods[season].map(food => ({ name: food, value: food }))
        });
        console.log(`Your favorite comfort foods for ${season} are: ${favoriteComfortFoods.join(', ')}`);
    }

    console.log('\nThank you for participating in the survey!');
}

runSurvey();