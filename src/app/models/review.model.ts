import { Customer } from "./customer.model";

export class Review {
    public reviewId : number;
	public rating : number;
    public headline : string;
    public reviewMessage : String;
    public countHelpful : number;
    public customer : Customer;

}