import Chance from 'chance';
import toLower from 'lodash/toLower';
import includes from 'lodash/includes';
import get from 'lodash/get';

import oneliners from '../oneliners.json';

const chance = new Chance();

const getBotResponse = (text: string): string => {
  const lowerCaseMessage = toLower(text);

  let category = chance.pickone(['filthy', 'life-lessons', 'quotes']);

  if (
    includes(lowerCaseMessage, 'vunzig')
    || includes(lowerCaseMessage, 'vies')
    || includes(lowerCaseMessage, 'goor')
  ) {
    category = 'filthy';
  }

  if (
    includes(lowerCaseMessage, 'uitspraak')
    || includes(lowerCaseMessage, 'quote')
    || includes(lowerCaseMessage, 'citaat')
  ) {
    category = 'quotes';
  }

  if (
    includes(lowerCaseMessage, 'advies') ||
    includes(lowerCaseMessage, 'les') ||
    includes(lowerCaseMessage, 'raad')
  ) {
    category = 'life-lessons';
  }

  return chance.pickone(get(oneliners, category));
};

export default getBotResponse;
