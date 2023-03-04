import { newMotorcicleEntry, updateMotorcicleEntry } from "./types";

const parseCountry = (countryFromRequest:any): string => {
    if(!isString(countryFromRequest)){
        throw new Error('Incorrect or missing country')
    }
    return countryFromRequest
}

const parseBrand = (brandFromRequest:any): string => {
    if(!isString(brandFromRequest)){
        throw new Error('Incorrect or missing brand')
    }
    return brandFromRequest
}

const parseYear = (yearFromRequest:any): number => {
    if(!isNumber(yearFromRequest)){
        throw new Error('Incorrect or missing year')
    }
    return yearFromRequest
}

const parseEngine = (engineFromRequest:any): number => {
    if(!isNumber(engineFromRequest)){
        throw new Error('Incorrect or missing engine')
    }
    return engineFromRequest
}

const parseId = (idFromRequest:any): string => {
    if(!isString(idFromRequest)){
        throw new Error('Incorrect or missing engine')
    }
    return idFromRequest
}

const isString = (string: string): boolean => {
    //return typeof string !== 'string' || string instanceof  === 'String') instanceof string for strings objects
    return typeof string === 'string'
}

const isNumber = (number: number): boolean => {
    //return typeof string !== 'string' || string instanceof  === 'String') instanceof string for strings objects
    return typeof number === 'number'
}

export const toNewProductEntry = (object: any): newMotorcicleEntry => {
    const newEntry: newMotorcicleEntry = {
        country: parseCountry(object.country),
        engine: parseEngine(object.engine),
        year: parseYear(object.year),
        brand: parseBrand(object.brand) 
    }

    return newEntry
}

export const toUpdateProductEntry = (object: any): updateMotorcicleEntry => {
    const updateEntry: updateMotorcicleEntry = {
        id: parseId(object.id),
        country: parseCountry(object.country),
        engine: parseEngine(object.engine),
        year: parseYear(object.year),
        brand: parseBrand(object.brand) 
    }

    return updateEntry
}

