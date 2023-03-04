export interface MotorcicleEntry{ 
  country?: string ,
  engine?: number,
  year?: number,
  brand?: string
}

export interface newMotorcicleEntry{ 
    country: string ,
    engine: number,
    year: number,
    brand: string
}

export interface updateMotorcicleEntry{ 
    id: string,
    country: string ,
    engine: number,
    year: number,
    brand: string
}

export interface deleteMotorcicleResponse{ 
    id: Types.Object,
    country: string ,
    engine: number,
    year: number,
    brand: string
}