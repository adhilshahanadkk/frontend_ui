// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class ChatbotService {
//   private apiUrl = 'http://localhost:8000'; // Update with your FastAPI server URL

//   constructor(private http: HttpClient) {}

//   sendTextMessage(userId: string, text: string, isSpeech: boolean = false): Observable<any> {
//     const payload = { user_id: userId, text: text, is_speech: isSpeech };
//     return this.http.post<any>(`${this.apiUrl}/chat/text`, payload);
//   }

//   sendSpeechMessage(userId: string): Observable<any> {
//     const payload = { user_id: userId, is_speech: true };
//     return this.http.post<any>(`${this.apiUrl}/chat/speech`, payload);
//   }
// }

/////real oone-------------
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface ChatResponse {
//   response: string;
//   emotion?: string;
//   mental_state?: string;
//   speech?: string;  // If speech response is available
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatbotService {
//   private apiUrl = 'http://localhost:8000'; // FastAPI backend URL

//   constructor(private http: HttpClient) {}

//   // Function to send text message to backend
//   sendMessage(userId: string, message: string): Observable<ChatResponse> {
//     const payload = { user_id: userId, text: message, is_speech: false };
//     return this.http.post<ChatResponse>(`${this.apiUrl}/chat/text`, payload);
//   }

//   // Function to send voice input to backend
//   sendSpeech(userId: string, audioBlob: Blob): Observable<ChatResponse> {
//     const formData = new FormData();
//     formData.append('file', audioBlob, 'audio.wav'); // Sending audio as a file
//     formData.append('user_id', userId);
//     formData.append('is_speech', 'true');

//     return this.http.post<ChatResponse>(`${this.apiUrl}/chat/speech`, formData);
//   }
// }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatbotService {
//   private apiUrl = 'http://localhost:8000/chat';  // HTTP API (if needed)
//   private wsUrl = 'ws://localhost:8000/ws/';  // WebSocket API
//   private websocket: WebSocket | null = null;

//   constructor() {}

//   connectWebSocket(userId: string, onMessageReceived: (data: any) => void) {
//     this.websocket = new WebSocket(`${this.wsUrl}${userId}`);

//     this.websocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       onMessageReceived(data);
//     };

//     this.websocket.onclose = () => {
//       console.log('WebSocket disconnected. Reconnecting...');
//       setTimeout(() => this.connectWebSocket(userId, onMessageReceived), 3000);
//     };
//   }

//   sendMessage(message: string) {
//     if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
//       this.websocket.send(message);
//     } else {
//       console.error('WebSocket not connected.');
//     }
//   }

//   speechToText(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const recognition = new (window as any).webkitSpeechRecognition();
//       recognition.lang = 'en-US';
//       recognition.start();

//       recognition.onresult = (event: any) => {
//         resolve(event.results[0][0].transcript);
//       };

//       recognition.onerror = (event: any) => {
//         reject(event.error);
//       };

//       recognition.onend = () => {
//         console.log('Speech recognition ended');
//       };
//     });
//   }
// }









// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatbotService {
//   private apiUrl = 'http://localhost:8000/chat';  // HTTP API (if needed)
//   private wsUrl = 'ws://localhost:8000/ws/';  // WebSocket API
//   private websocket: WebSocket | null = null;

//   constructor() {}

//   connectWebSocket(userId: string, onMessageReceived: (data: any) => void) {
//     this.websocket = new WebSocket(`${this.wsUrl}${userId}`);

//     this.websocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       onMessageReceived(data);
//     };

//     this.websocket.onclose = () => {
//       console.log('WebSocket disconnected. Reconnecting...');
//       setTimeout(() => this.connectWebSocket(userId, onMessageReceived), 3000);
//     };
//   }

//   sendMessage(message: string) {
//     if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
//       this.websocket.send(message);
//     } else {
//       console.error('WebSocket not connected.');
//     }
//   }

//   // ✅ Fix: Add missing speechToText() method
//   speechToText(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const recognition = new (window as any).webkitSpeechRecognition();
//       recognition.lang = 'en-US';
//       recognition.start();

//       recognition.onresult = (event: any) => {
//         resolve(event.results[0][0].transcript);
//       };

//       recognition.onerror = (event: any) => {
//         reject(event.error);
//       };

//       recognition.onend = () => {
//         console.log('Speech recognition ended');
//       };
//     });
//   }
// }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ChatbotService {
//   private wsUrl = 'ws://localhost:8000/ws'; // FastAPI WebSocket URL
//   private apiUrl = 'http://localhost:8000/speech-to-text'; // FastAPI Speech-to-Text API

//   createWebSocketConnection(): WebSocket {
//     return new WebSocket(this.wsUrl);
//   }

//   async startSpeechRecognition(): Promise<string | null> {
//     try {
//       const response = await fetch(this.apiUrl, { method: 'POST' });
//       const data = await response.json();
//       return data.transcription || null;
//     } catch (error) {
//       console.error('Speech Recognition Error:', error);
//       return null;
//     }
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://127.0.0.1:8000/chat';  // Update if FastAPI runs on a different port

  constructor(private http: HttpClient) {}

  // Send text message to FastAPI backend
  sendMessage(userId: string, text: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/text`, {
      user_id: userId,
      text: text,
      is_speech: false
    });
  }

  // Send real-time speech data (optional, if FastAPI supports streaming)
  sendSpeech(userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/speech`, { user_id: userId, is_speech: true });
  }
}
