import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../Components/Common/BookingForm';

const DietitianProfile = () => {
  const { dietitianId } = useParams();
  const [dietitian, setDietitian] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch dietitian data from API
    // For now, we'll use mock data
    const mockDietitian = {
      _id: dietitianId || 'dietitian123',
      name: 'Dr. Priya Sharma',
      specialization: 'Ayurvedic Nutrition',
      experience: '8 years',
      rating: 4.8,
      patients: 150,
      clinic_name: 'Wellness Ayurveda Center',
      bio: 'Dr. Priya Sharma is a certified Ayurvedic nutritionist with over 8 years of experience in helping patients achieve optimal health through personalized diet plans based on their dosha type and health conditions.',
      qualifications: [
        'M.D. in Ayurvedic Medicine',
        'Certified Nutritionist',
        'Specialization in Diabetes Management',
        'Expert in Weight Management'
      ],
      specialties: [
        'Diabetes Management',
        'Weight Management',
        'Digestive Health',
        'Hormonal Balance',
        'Chronic Disease Management'
      ]
    };
    
    setDietitian(mockDietitian);
    setLoading(false);
  }, [dietitianId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dietitian Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {dietitian.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900">{dietitian.name}</h1>
                  <p className="text-xl text-blue-600 font-medium">{dietitian.specialization}</p>
                  <p className="text-gray-600">{dietitian.clinic_name}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(dietitian.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {dietitian.rating} ({dietitian.patients} patients)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Dr. {dietitian.name.split(' ')[1]}</h2>
              <p className="text-gray-700 leading-relaxed">{dietitian.bio}</p>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Qualifications</h2>
              <ul className="space-y-2">
                {dietitian.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {dietitian.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <BookingForm 
              dietitianId={dietitian._id}
              onBookingSuccess={() => {
                // You can add success handling here
                console.log('Booking successful!');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietitianProfile;
