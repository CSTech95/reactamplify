import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum VehicleTypes {
  SEDAN = "SEDAN",
  COUPE = "COUPE",
  SUV = "SUV",
  TRUCK = "TRUCK",
  MOTORCYCLE = "MOTORCYCLE",
  VAN = "VAN",
  BOAT = "BOAT",
  PLANE = "PLANE"
}

export enum HelpTypes {
  GENERAL = "GENERAL",
  BILLING = "BILLING"
}

export enum Months {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULY = "JULY",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER"
}

type HelpMemoMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerHelpMemo = {
  readonly id: string;
  readonly type: HelpTypes | keyof typeof HelpTypes;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

type LazyHelpMemo = {
  readonly id: string;
  readonly type: HelpTypes | keyof typeof HelpTypes;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

export declare type HelpMemo = LazyLoading extends LazyLoadingDisabled ? EagerHelpMemo : LazyHelpMemo

export declare const HelpMemo: (new (init: ModelInit<HelpMemo, HelpMemoMetaData>) => HelpMemo) & {
  copyOf(source: HelpMemo, mutator: (draft: MutableModel<HelpMemo, HelpMemoMetaData>) => MutableModel<HelpMemo, HelpMemoMetaData> | void): HelpMemo;
}

type EagerUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthMonth?: Months | keyof typeof Months | null;
  readonly birthDay?: string | null;
  readonly birthYear?: string | null;
  readonly phoneNumber?: string | null;
  readonly houseNumber: number;
  readonly houseStreet: string;
  readonly town: string;
  readonly state: string;
  readonly HelpMemos?: (HelpMemo | null)[] | null;
  readonly rentedVehicles?: (Vehicle | null)[] | null;
  readonly country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthMonth?: Months | keyof typeof Months | null;
  readonly birthDay?: string | null;
  readonly birthYear?: string | null;
  readonly phoneNumber?: string | null;
  readonly houseNumber: number;
  readonly houseStreet: string;
  readonly town: string;
  readonly state: string;
  readonly HelpMemos: AsyncCollection<HelpMemo>;
  readonly rentedVehicles: AsyncCollection<Vehicle>;
  readonly country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerVehicle = {
  readonly id: string;
  readonly Make: string;
  readonly Model: string;
  readonly isAvailable: boolean;
  readonly year: number;
  readonly vehicleType?: VehicleTypes | keyof typeof VehicleTypes | null;
  readonly userID: string;
  readonly rentedBy?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVehicle = {
  readonly id: string;
  readonly Make: string;
  readonly Model: string;
  readonly isAvailable: boolean;
  readonly year: number;
  readonly vehicleType?: VehicleTypes | keyof typeof VehicleTypes | null;
  readonly userID: string;
  readonly rentedBy: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vehicle = LazyLoading extends LazyLoadingDisabled ? EagerVehicle : LazyVehicle

export declare const Vehicle: (new (init: ModelInit<Vehicle, VehicleMetaData>) => Vehicle) & {
  copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}