import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCall from '../Components/Common/VideoCall';

const SessionPage = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const handleEndCall = () => {
    // Redirect back to the appropriate dashboard
    // You might want to determine this based on user role
    navigate('/user'); // Default to user dashboard
  };

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Session</h1>
          <p className="text-gray-600 mb-4">No session ID provided</p>
          <button
            onClick={() => navigate('/user')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <VideoCall 
        channelName={sessionId} 
        onEndCall={handleEndCall}
      />
    </div>
  );
};

export default SessionPage;
