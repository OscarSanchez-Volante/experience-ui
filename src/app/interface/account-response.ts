
import { Account } from "./account";

export interface AccountResponse {
    rows: Account[];
    page: number;
    size: number;
    count: number;
    totalPages: number;
    lastPage: boolean;
    success: boolean;
}
