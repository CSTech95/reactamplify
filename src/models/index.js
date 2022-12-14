// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VehicleTypes = {
  "SEDAN": "SEDAN",
  "COUPE": "COUPE",
  "SUV": "SUV",
  "TRUCK": "TRUCK",
  "MOTORCYCLE": "MOTORCYCLE",
  "VAN": "VAN"
};

const HelpTypes = {
  "GENERAL": "GENERAL",
  "BILLING": "BILLING"
};

const Months = {
  "JANUARY": "JANUARY",
  "FEBRUARY": "FEBRUARY",
  "MARCH": "MARCH",
  "APRIL": "APRIL",
  "MAY": "MAY",
  "JUNE": "JUNE",
  "JULY": "JULY",
  "AUGUST": "AUGUST",
  "SEPTEMBER": "SEPTEMBER",
  "OCTOBER": "OCTOBER",
  "NOVEMBER": "NOVEMBER",
  "DECEMBER": "DECEMBER"
};

const { Cards, HelpMemo, User, Vehicle, Inventory } = initSchema(schema);

export {
  Cards,
  HelpMemo,
  User,
  Vehicle,
  Inventory,
  VehicleTypes,
  HelpTypes,
  Months
};