export interface ProposedAppointment {
    Type: AppointmentType;
    Start: string;
    Finish: string;
    Clinician: Clinician;
    Modules: any[];
    Services: any[];
    Site: Site;
    Telemedicine: boolean;
    Invoice: Invoice;
};

export interface Clinician {
    FullName: string;
    SexType: number;
};

export interface Site {
Key: number;
Name: string;
Address: Address;
};

export interface Address {
Address1: string;
Address2: string;
City: string;
PostCode: string;
};

export interface Invoice {
CurrencySymbol: string;
TotalGross: number;
};

export interface BookedAppointment {
Name: string;
Location: string;
Date: string;
};

export interface AppointmentType {
Key: string;
Name: string;
CanBookAppointment: boolean;
TelemedicineOption: boolean;
CanAddServices: boolean;
Notes: string;
CancellationPolicy: string;
};

export interface Document {
Name: string;
Comments: string;
DateCreated: string;
Url: string;
MIMEType: string;
};

export interface Appointment {
AuthorisationCode: string;
CaseKey: number;
Clinician: Clinician;
Modules: any[];
Patient: Patient;
PatientKey: string;
Services: any[];
Site: Site;
Start: string;
Finish: string;
State: string;
StateColor: string;
Key: string;
Telemedicine: boolean;
Type: AppointmentType;
};


export interface Patient {
Key: string;
Title: string;
FullName: string;
SexType: number;
};


