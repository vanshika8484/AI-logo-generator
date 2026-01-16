"use client"
import { useState } from 'react';
import { UserDetailContext } from '@/context/UserDetailContext'
import React, { useContext, useEffect } from 'react'
import Prompt from '../_data/Prompt';
import axios from 'axios';

const GenerateLogo = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);

  useEffect(() => {
    if(typeof window !== 'undefined' && userDetail?.email) {
      const storage = localStorage.getItem('formData');
      if(storage) {
        setFormData(JSON.parse(storage));
        console.log("Form Data:", JSON.parse(storage));
      }
    }
  }, [userDetail])

  useEffect(() => {
    if(formData?.title) {
      GeneratedAILogo()
    }
  }, [formData])

  const GeneratedAILogo = async () => {
    setLoading(true);
    setError(null);

    try {
      const PROMPT = Prompt.LOGO_PROMPT
        .replace('{logoTitle}', formData?.title || '')
        .replace('{logoDesc}', formData?.desc || '')
        .replace('{logoIdea}', formData?.idea || '')
        .replace('{logoColor}', formData?.palette || '')
        .replace('{logoDesign}', formData?.design?.title || '')
        .replace('{logoPrompt}', formData?.design?.prompt || '');

      console.log("Final PROMPT:", PROMPT);

      // Generate Logo Prompt from AI
      const result = await axios.post('/api/ai-logo-model', {
        prompt: PROMPT
      });

      console.log("API Response:", result.data);
      
      if(result.data.success) {
        setAiResponse(result.data.text);
      } else {
        setError(result.data.error || "Failed to generate logo");
      }

    } catch (err) {
      console.error("Error generating logo:", err);
      
      // More detailed error logging
      if (err.response) {
        console.error("Response error:", err.response.data);
        setError(`Server error: ${err.response.data.error || err.response.data.details || 'Unknown error'}`);
      } else if (err.request) {
        console.error("Request error:", err.request);
        setError("No response from server");
      } else {
        console.error("Error:", err.message);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <h2>Generate Logo</h2>
        
        {loading && <p>Generating logo...</p>}
        
        {error && (
          <div style={{color: 'red', padding: '10px', border: '1px solid red'}}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {aiResponse && (
          <div style={{padding: '10px', border: '1px solid green'}}>
            <strong>AI Response:</strong>
            <pre style={{whiteSpace: 'pre-wrap'}}>{aiResponse}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default GenerateLogo