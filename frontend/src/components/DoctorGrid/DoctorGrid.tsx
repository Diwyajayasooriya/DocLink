import React from 'react';
import { Calendar, Star, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  consultationFee: number;
  image: string;
  qualifications: string;
  rating: number;
  experience: string;
  availableDispensaries: Array<{
    name: string;
    time: string;
    address: string;
  }>;
  nextAvailable: string;
  totalPatients: number;
  languages: string[];
}

interface DoctorGridProps {
  doctors: Doctor[];
  onSelectDoctor: (doctorId: number) => void;
}

const DoctorGrid: React.FC<DoctorGridProps> = ({ doctors, onSelectDoctor }) => {
  return (
    <Card className="border-emerald-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-emerald-800">
          <Stethoscope className="w-5 h-5 text-emerald-600" />
          Choose Your Doctor
        </CardTitle>
        <p className="text-sm text-emerald-600">
          {doctors.length} doctors available • Select to view dispensaries and book appointment
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-6 border-2 border-gray-100 rounded-xl cursor-pointer transition-all hover:border-emerald-300 hover:shadow-lg bg-white"
              onClick={() => onSelectDoctor(doctor.id)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover bg-emerald-100 border-2 border-emerald-200"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-emerald-600 font-medium">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{doctor.qualifications}</p>
                  <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Consultation Fee:</span>
                      <span className="font-bold text-emerald-600">LKR {doctor.consultationFee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Available at:</span>
                      <span className="font-medium">{doctor.availableDispensaries.length} locations</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Next available:</span>
                      <span className="font-medium text-blue-600">{doctor.nextAvailable}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Languages:</span>
                      <span className="font-medium text-xs">{doctor.languages.join(', ')}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Dispensaries & Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {doctors.length === 0 && (
          <div className="text-center py-12">
            <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No doctors found matching your search.</p>
            <p className="text-gray-400 text-sm">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DoctorGrid;
