function getInitialState() {
  return {
    name: '',
    email: '',
    phone: '',
    gender: 'male',
    location: '',
    treatment: [],
    travelDate: '',
    pain: 0,
    dentalSituation: '',
    travelAccompanied: false,
    hotelCharacteristics: '',
    tourismActivities: [],
    extraDetails: '',
  };
}

export default getInitialState;
