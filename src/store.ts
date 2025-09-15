import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { DraftPatientType, PatientType } from "./types";

type PatinesState = {
  patients: PatientType[];
  activeId: PatientType["id"];
  addPatient: (data: DraftPatientType) => void;
  deletePatient: (id: PatientType["id"]) => void;
  getPatientById: (id: PatientType["id"]) => void;
  updatePatient: (data: DraftPatientType) => void;
};

const createPatient = (patient: DraftPatientType): PatientType => {
  return {
    ...patient,
    id: crypto.randomUUID(),
  };
};

export const usePatientStore = create<PatinesState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },
        getPatientById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { ...data, id: state.activeId }
                : patient
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patients-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
