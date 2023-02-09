export const choices = {
    'Insurance type': null,
    'Period': null,
    'Package type': null,
    'Any additional charges': 'No',
    'Number of people': 1,
  };

export const packageTypes={
    'Basic': {
        annual:39,
        shortTerm:1.2,
    },
    'Extended': {
        annual:49,
        shortTerm:1.8,
    },
    'Extra': {
        annual:59,
        shortTerm:2.4,
    }
}
export const anyAdditionalCharges={
    'No':{
        annual:1,
        shortTerm:1,
    },
    'Sport activities': {
        annual:1.1,
        shortTerm:1.3,
    },
    'Cancellation': {
        annual:1.2,
        shortTerm:1.5,
    }
}