import {RowsPrinterIntrerface} from "./PrinterIntrerface";
import {QueryResultRow} from "pg";

export class TestPrinter implements RowsPrinterIntrerface {
    constructor(private readonly row : QueryResultRow) {
    }
    print() {

    }
}