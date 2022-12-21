import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum VehicleTypes {
  SEDAN = "SEDAN",
  COUPE = "COUPE",
  SUV = "SUV",
  TRUCK = "TRUCK",
  MOTORCYCLE = "MOTORCYCLE",
  VAN = "VAN"
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

type CardsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentsMetaData = {
  readOnlyFields: 'updatedAt';
}

type RentalsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HelpMemoMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCards = {
  readonly id: string;
  readonly cardNumber?: number | null;
  readonly fName?: string | null;
  readonly lName?: string | null;
  readonly expMonth?: number | null;
  readonly expYear?: number | null;
  readonly secCode?: number | null;
  readonly address?: string | null;
  readonly zip?: number | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCards = {
  readonly id: string;
  readonly cardNumber?: number | null;
  readonly fName?: string | null;
  readonly lName?: string | null;
  readonly expMonth?: number | null;
  readonly expYear?: number | null;
  readonly secCode?: number | null;
  readonly address?: string | null;
  readonly zip?: number | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cards = LazyLoading extends LazyLoadingDisabled ? EagerCards : LazyCards

export declare const Cards: (new (init: ModelInit<Cards, CardsMetaData>) => Cards) & {
  copyOf(source: Cards, mutator: (draft: MutableModel<Cards, CardsMetaData>) => MutableModel<Cards, CardsMetaData> | void): Cards;
}

type EagerPayments = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly rentalPayment?: Rentals | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
  readonly paymentsRentalPaymentId?: string | null;
}

type LazyPayments = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly rentalPayment: AsyncItem<Rentals | undefined>;
  readonly userID: string;
  readonly updatedAt?: string | null;
  readonly paymentsRentalPaymentId?: string | null;
}

export declare type Payments = LazyLoading extends LazyLoadingDisabled ? EagerPayments : LazyPayments

export declare const Payments: (new (init: ModelInit<Payments, PaymentsMetaData>) => Payments) & {
  copyOf(source: Payments, mutator: (draft: MutableModel<Payments, PaymentsMetaData>) => MutableModel<Payments, PaymentsMetaData> | void): Payments;
}

type EagerRentals = {
  readonly id: string;
  readonly Vehicle?: Vehicle | null;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rentalsVehicleId?: string | null;
}

type LazyRentals = {
  readonly id: string;
  readonly Vehicle: AsyncItem<Vehicle | undefined>;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rentalsVehicleId?: string | null;
}

export declare type Rentals = LazyLoading extends LazyLoadingDisabled ? EagerRentals : LazyRentals

export declare const Rentals: (new (init: ModelInit<Rentals, RentalsMetaData>) => Rentals) & {
  copyOf(source: Rentals, mutator: (draft: MutableModel<Rentals, RentalsMetaData>) => MutableModel<Rentals, RentalsMetaData> | void): Rentals;
}

type EagerVehicle = {
  readonly id: string;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly isAvailable?: boolean | null;
  readonly year?: number | null;
  readonly vehicleType?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVehicle = {
  readonly id: string;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly isAvailable?: boolean | null;
  readonly year?: number | null;
  readonly vehicleType?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vehicle = LazyLoading extends LazyLoadingDisabled ? EagerVehicle : LazyVehicle

export declare const Vehicle: (new (init: ModelInit<Vehicle, VehicleMetaData>) => Vehicle) & {
  copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}

type EagerHelpMemo = {
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

type LazyHelpMemo = {
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
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
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly birthMonth?: string | null;
  readonly birthDay?: string | null;
  readonly birthYear?: string | null;
  readonly phoneNumber?: string | null;
  readonly houseNumber?: number | null;
  readonly houseStreet?: string | null;
  readonly zip?: string | null;
  readonly state?: string | null;
  readonly userMemo?: (Payments | null)[] | null;
  readonly town?: string | null;
  readonly userRentals?: (Payments | null)[] | null;
  readonly userPayments?: (Payments | null)[] | null;
  readonly userCards?: (Payments | null)[] | null;
  readonly country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly birthMonth?: string | null;
  readonly birthDay?: string | null;
  readonly birthYear?: string | null;
  readonly phoneNumber?: string | null;
  readonly houseNumber?: number | null;
  readonly houseStreet?: string | null;
  readonly zip?: string | null;
  readonly state?: string | null;
  readonly userMemo: AsyncCollection<Payments>;
  readonly town?: string | null;
  readonly userRentals: AsyncCollection<Payments>;
  readonly userPayments: AsyncCollection<Payments>;
  readonly userCards: AsyncCollection<Payments>;
  readonly country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}