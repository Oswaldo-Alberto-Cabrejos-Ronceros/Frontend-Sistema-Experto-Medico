export interface HistoryDiagnosis {
  id: number;
  fecha: string;
  user_id: number;
  diagnostico_id: number;
}

export interface HistoryInfoDiagnosis {
  id: number;
  fecha: string;
  hora: string;
  diagnosis_id: number;
  diagnosis_name: string;
  diagnosis_url_image: string;
}
