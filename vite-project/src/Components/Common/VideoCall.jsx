import React, { useState, useEffect } from 'react';
import { AgoraUIKit } from 'agora-react-uikit';
import { useAuth } from '../../Context/authContext';

const VideoCall = ({ channelName, onEndCall }) => {
  const { user } = useAuth();
  const [isVideoCall, setIsVideoCall] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Agora App ID - You'll need to get this from Agora Console
  // For development, you can use a test App ID
  const APP_ID = process.env.REACT_APP_AGORA_APP_ID || 'your-agora-app-id';

  useEffect(() => {
    // Check if we have the required App ID
    if (!APP_ID || APP_ID === 'your-agora-app-id') {
      console.warn('Agora App ID not configured. Please set REACT_APP_AGORA_APP_ID in your environment variables.');
    }
    setIsLoading(false);
  }, []);

  const rtcProps = {
    appId: APP_ID,
    channel: channelName,
    token: null, // You can implement token-based authentication for production
    uid: user?._id || Math.floor(Math.random() * 100000), // Use user ID or generate random
  };

  const callbacks = {
    EndCall: () => {
      if (onEndCall) {
        onEndCall();
      }
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading video call...</p>
        </div>
      </div>
    );
  }

  if (!APP_ID || APP_ID === 'your-agora-app-id') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
            <h2 className="font-bold text-lg mb-2">Agora Configuration Required</h2>
            <p className="text-sm">
              To use video calling, you need to configure your Agora App ID. 
              Please set the REACT_APP_AGORA_APP_ID environment variable.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded text-left text-sm">
            <p className="font-semibold mb-2">Setup Instructions:</p>
            <ol className="list-decimal list-inside space-y-1 text-xs">
              <li>Sign up at <a href="https://console.agora.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">console.agora.io</a></li>
              <li>Create a new project and get your App ID</li>
              <li>Add REACT_APP_AGORA_APP_ID=your_app_id to your .env file</li>
              <li>Restart your development server</li>
            </ol>
          </div>
          <button
            onClick={onEndCall}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        styleProps={{
          localBtnContainer: { backgroundColor: '#007bff' },
          localBtnStyles: {
            muteLocalAudio: { backgroundColor: '#007bff' },
            muteLocalVideo: { backgroundColor: '#007bff' },
            switchCamera: { backgroundColor: '#007bff' },
            fullScreen: { backgroundColor: '#007bff' },
            endCall: { backgroundColor: '#dc3545' },
          },
          UIKitContainer: { height: '100vh', width: '100vw' },
          videoMode: {
            max: 16,
            min: 1,
          },
          layout: {
            grid: true,
            gridSize: 2,
          },
        }}
      />
    </div>
  );
};

export default VideoCall;
