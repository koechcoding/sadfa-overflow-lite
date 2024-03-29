import { createReducer, on } from "@ngrx/store";
import { Company } from "src/app/interfaces/org.interface";
import * as CompaniesActions from "../actions/org.actions";

export interface CompaniesState{
    companies: Company[];
    loading: boolean;
    error: any;
}

export const initialState: CompaniesState={
    companies: [],
    loading: false,
    error: null
}

export const companiesReducer = createReducer(
    initialState,
    on(CompaniesActions.loadCompanies, (state)=>{
        return{
            ...state,
            loading: true
        }
    }),
    on(CompaniesActions.loadCompaniesSuccess, (state, {companies})=>{
        return {
            ...state,
            loading: false,
            companies: [...companies]
        }
    }),

    on(CompaniesActions.loadCompaniesError, (state, {error})=>{
        return{
            ...state,
            loading: false,
            error
        }
    })

);