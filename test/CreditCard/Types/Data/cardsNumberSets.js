import masterCardNumbers from './master.card.numbers.json';
import visaNumbers from './visa.numbers.json';
import americanExpressNumbers from './american.express.numbers.json';
import dinersClubNumbers from './diners.club.numbers.json';
import discoverNumbers from './discover.numbers.json';
import jcbNumbers from './jcb.numbers.json';
import maestroCardNumbers from './maestro.card.numbers.json';

const cardsNumberSets = [
    { name: 'Master Card', data: masterCardNumbers },
    { name: 'Visa', data: visaNumbers },
    { name: 'American Express', data: americanExpressNumbers },
    { name: 'Diners Club', data: dinersClubNumbers },
    { name: 'Discover', data: discoverNumbers },
    { name: 'JCB', data: jcbNumbers },
    { name: 'Maestro Card', data: maestroCardNumbers },
];

export default cardsNumberSets;
