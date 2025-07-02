import { IStyles } from "../../../../models/style.model";

export interface IFromBlog {
    srcIconCategory:string;
    linkCategory:string;
    srcImg:string;
    title:string;
    description:string;
    date:string;
    link:string;
    styles: IStyles
}

