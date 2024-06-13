import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails";

export default function PatientList() {
    
    const patients = usePatientStore((state) => state.patients);
    
    return (
        <div className="md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mg-10 text-center">
                        Administra tus Pacientes {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails 
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Agregar Pacientes {' '}
                        <span className="text-indigo-600 font-bold">y encuentralos Aquí</span>
                    </p>
                </>
            )}
        </div>
    )
}
