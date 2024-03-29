import { createAction, props } from "@ngrx/store";
import { Company } from "src/app/interfaces/org.interface";


export const loadCompanies = createAction(
    "[Companies] Load Companies"
);

export const loadCompaniesSuccess = createAction(
    "[Companies] load Companies Success",

    props<{ companies: Company[]}>()
);

export const loadCompaniesError = createAction(
    "[Companies] Load Companies Error",

    props<{ error: any}>()
)