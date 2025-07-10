// src/components/AIAssistant.js
import React, { useState } from 'react';
import axios from 'axios';

function AIAssistant() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        if (!input.trim()) return;

        setLoading(true);
        try {
            const res = await axios.post(
                'https://api-inference.huggingface.co/models/google/flan-t5-small',
                {
                    inputs: input,
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.AI_API_KEY}`,
                    },
                }
            );

            setResponse(res.data[0]?.generated_text || 'No response');
        } catch (err) {
            setResponse('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Ask AI Assistant</h3>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                style={{ padding: '8px', width: '80%' }}
            />
            <button onClick={askAI} style={{ marginLeft: '10px', padding: '8px' }}>
                Ask
            </button>
            <div style={{ marginTop: '10px', minHeight: '40px' }}>
                {loading ? 'Loading...' : response}
            </div>
        </div>
    );
}

export default AIAssistant;

