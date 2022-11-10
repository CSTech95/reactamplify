// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VehicleTypes = {
  "SEDAN": "SEDAN",
  "COUPE": "COUPE",
  "SUV": "SUV",
  "TRUCK": "TRUCK",
  "MOTORCYCLE": "MOTORCYCLE",
  "VAN": "VAN",
  "BOAT": "BOAT",
  "PLANE": "PLANE"
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

const { HelpMemo, User, Vehicle } = initSchema(schema);

export {
  HelpMemo,
  User,
  Vehicle,
  VehicleTypes,
  HelpTypes,
  Months
};