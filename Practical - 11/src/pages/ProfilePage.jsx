import React, { useState } from 'react';
import { useFirebase } from '../context/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const ProfilePage = () => {
    const firebase = useFirebase();
    const [newName, setNewName] = useState(firebase.user.displayName);
    const [loading, setLoading] = useState(false);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // 1. Update Firebase Auth profile
            await firebase.updateUserProfileInfo(firebase.user, { displayName: newName });

            // 2. Update user document in Firestore
            const userDocRef = doc(firebase.firestore, 'users', firebase.user.uid);
            await updateDoc(userDocRef, { name: newName });
            
            alert('Profile updated successfully!');
        } catch (error) {
            console.error("Error updating profile: ", error);
            alert('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="content" style={{ 
            backgroundColor: '#0d1117',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div className="card" style={{ 
                maxWidth: '600px',
                margin: '40px auto',
                padding: '32px',
                backgroundColor: '#161b22',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                color: '#c9d1d9'
            }}>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '32px'
                }}>
                    <img 
                        src={firebase.user.photoURL} 
                        alt="profile" 
                        style={{ 
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            marginBottom: '16px',
                            border: '4px solid #30363d'
                        }} 
                    />
                    <h2 style={{ 
                        margin: '0 0 8px 0',
                        fontSize: '24px',
                        color: '#ffffff'
                    }}>{firebase.user.displayName}</h2>
                    <p style={{ 
                        margin: 0,
                        color: '#8b949e',
                        fontSize: '14px'
                    }}>{firebase.user.email}</p>
                </div>

                <form onSubmit={handleProfileUpdate} style={{
                    width: '100%'
                }}>
                    <div style={{
                        marginBottom: '24px'
                    }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#ffffff',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}>Update Display Name</label>
                        <input 
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Enter new name"
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                backgroundColor: '#0d1117',
                                border: '1px solid #30363d',
                                borderRadius: '6px',
                                color: '#c9d1d9',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            fontSize: '16px',
                            backgroundColor: '#6366f1',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'background-color 0.2s',
                            ':hover': {
                                backgroundColor: '#4f46e5'
                            },
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Updating...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;