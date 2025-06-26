export interface Diagnosis{
    id:number,
    name:string,
    content:string
    image_url:string
}

export interface DiagnosisResponse{
  diagnostico_id:number
}

export interface DiagnosisRequest{
  sintomas:string[]
}

export interface DiagnosisSessionRequest{
  diagnosticoRequest:DiagnosisRequest,
  user_id:number
}
