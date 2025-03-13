// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';

import { Version } from "@angular/core"

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css'],
//   imports: [CommonModule, FormsModule] // ✅ Import required modules
// })
// export class ChatbotComponent implements OnInit, OnDestroy {
//   messages: { text: string; sender: string }[] = [];
//   inputMessage: string = '';
//   isListening: boolean = false;
//   private ws: WebSocket | null = null;

//   constructor(private chatbotService: ChatbotService) {}

//   ngOnInit(): void {
//     this.connectWebSocket();
//   }

//   connectWebSocket(): void {
//     this.ws = this.chatbotService.createWebSocketConnection();

//     this.ws.onmessage = (event) => {
//       const response = JSON.parse(event.data);
//       this.messages.push({ text: response.text, sender: 'bot' });
//     };

//     this.ws.onerror = (error) => console.error('WebSocket Error:', error);
//   }

//   sendMessage(): void {
//     if (this.inputMessage.trim()) {
//       this.messages.push({ text: this.inputMessage, sender: 'user' });
//       this.ws?.send(JSON.stringify({ message: this.inputMessage }));
//       this.inputMessage = ''; // Clear input field
//     }
//   }

//   startListening(): void {
//     this.isListening = true;
//     this.chatbotService.startSpeechRecognition().then((transcription) => {
//       this.isListening = false;
//       if (transcription) {
//         this.messages.push({ text: transcription, sender: 'user' });
//         this.ws?.send(JSON.stringify({ message: transcription }));
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     this.ws?.close();
//   }
// }





// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true, 
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;

//   constructor() {
//     // Initial bot message
//     this.messages.push({ text: "Hello! 👋 How can I assist you?", author: "bot" });
//   }

//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   sendMessage() {
//     if (this.userMessage.trim() === '') return;
  
//     // User message
//     this.messages.push({ text: this.userMessage, author: 'user' });
  
//     // Allow Angular to update DOM before scrolling
//     setTimeout(() => {
//       this.scrollToBottom();
//     }, 100);
  
//     // Simulated bot response
//     setTimeout(() => {
//       this.messages.push({ text: "I'm here to help! 😊", author: 'bot' });
  
//       setTimeout(() => {
//         this.scrollToBottom();
//       }, 100);
//     }, 1000);
  
//     this.userMessage = ''; // Clear input field
//   }
  
//   // Function to scroll chat to the bottom
//   scrollToBottom() {
//     const chatWindow = document.querySelector('.chat-window');
//     if (chatWindow) {
//       chatWindow.scrollTop = chatWindow.scrollHeight;
//     }
//   }
  
// }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';


// @Component({
//  selector: 'app-chatbot',
//  standalone: true,
//  imports: [CommonModule, FormsModule],
//  templateUrl: './chatbot.component.html',
//  styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//  messages: { text: string, author: string }[] = [];
//  userMessage: string = '';
//  isChatOpen: boolean = false;
//  isRecording: boolean = false;
//  recognition: any;


//  constructor() {
//    // Initial bot message
//    this.messages.push({ text: "Hello! 👋 How can I assist you?", author: "bot" });


//    // Speech Recognition Setup
//    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  
//    if (SpeechRecognition) {
//      this.recognition = new SpeechRecognition();
//      this.recognition.continuous = false;
//      this.recognition.lang = 'en-US';
//      this.recognition.interimResults = false;


//      // When speech is recognized
//      this.recognition.onresult = (event: any) => {
//        const transcript = event.results[0][0].transcript;
//        this.userMessage = transcript; // Set input field with recognized text
//      };


//      // Handle errors
//      this.recognition.onerror = (event: any) => {
//        console.error("Speech recognition error:", event.error);
//        this.stopRecording();
//      };
//    } else {
//      console.warn("Speech Recognition not supported in this browser.");
//    }
//  }


//  // Toggle Chat Window
//  toggleChat() {
//    this.isChatOpen = !this.isChatOpen;
//  }


//  // Send User Message
//  sendMessage() {
//    if (this.userMessage.trim() === '') return;
//     // User message
//    this.messages.push({ text: this.userMessage, author: 'user' });
//     // Allow Angular to update DOM before scrolling
//    setTimeout(() => this.scrollToBottom(), 100);
//     // Simulated bot response
//    setTimeout(() => {
//      this.messages.push({ text: "I'm here to help! 😊", author: 'bot' });
//      setTimeout(() => this.scrollToBottom(), 100);
//    }, 1000);
//     this.userMessage = ''; // Clear input field
//  }


//  // Scroll Chat Window to Bottom
//  scrollToBottom() {
//    const chatWindow = document.querySelector('.chat-window');
//    if (chatWindow) {
//      chatWindow.scrollTop = chatWindow.scrollHeight;
//    }
//  }


//  // Start Speech Recognition
//  startRecording() {
//    if (!this.recognition) return;


//    this.isRecording = true;
//    this.recognition.start();
//  }


//  // Stop Speech Recognition
//  stopRecording() {
//    if (!this.recognition) return;


//    this.isRecording = false;
//    this.recognition.stop();
//  }


//  // Toggle Speech Recognition
//  toggleMic() {
//    if (this.isRecording) {
//      this.stopRecording();
//    } else {
//      this.startRecording();
//    }
//  }
// }



// ----------------------------
// final Version  start
// ----------------------------


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;
//   isRecording: boolean = false;
//   recognition: any;
//   userId: string = 'user123';  // Replace with dynamic user ID if needed

//   constructor(private chatbotService: ChatbotService) {
//     // Initial bot message
//     this.messages.push({ text: "Hello! 👋 How can I assist you?", author: "bot" });

//     // Speech Recognition Setup
//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.continuous = false;
//       this.recognition.lang = 'en-US';
//       this.recognition.interimResults = false;

//       // Speech Recognized Event
//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript;
//         this.userMessage = transcript; // Set input field with recognized text
//         this.sendMessage(); // Automatically send recognized speech
//       };

//       // Handle Errors
//       this.recognition.onerror = (event: any) => {
//         console.error("Speech recognition error:", event.error);
//         this.stopRecording();
//       };
//     } else {
//       console.warn("Speech Recognition not supported in this browser.");
//     }
//   }

//   // Toggle Chat Window
//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   // Send User Message to FastAPI
//   sendMessage() {
//     if (this.userMessage.trim() === '') return;

//     // Add user message to chat
//     this.messages.push({ text: this.userMessage, author: 'user' });
//     this.scrollToBottom();

//     // Call FastAPI Service
//     this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(response => {
//       this.messages.push({ text: response.response, author: 'bot' });
//       this.scrollToBottom();
//     }, error => {
//       console.error("Error sending message:", error);
//       this.messages.push({ text: "⚠️ Error processing your request.", author: 'bot' });
//     });
//     // this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(response => {
//     //   this.messages.push({ text: response.response.content, author: 'bot' });
//     //   this.scrollToBottom();
//     // });

//     this.userMessage = ''; // Clear input field
//   }

//   // Scroll Chat Window to Bottom
//   scrollToBottom() {
//     setTimeout(() => {
//       const chatWindow = document.querySelector('.chat-window');
//       if (chatWindow) {
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//       }
//     }, 100);
//   }

//   // Start Speech Recognition
//   startRecording() {
//     if (!this.recognition) return;

//     this.isRecording = true;
//     this.recognition.start();
//   }

//   // Stop Speech Recognition
//   stopRecording() {
//     if (!this.recognition) return;

//     this.isRecording = false;
//     this.recognition.stop();
//   }

//   // Toggle Speech Recognition
//   toggleMic() {
//     if (this.isRecording) {
//       this.stopRecording();
//     } else {
//       this.startRecording();
//     }
//   }

//   // Send Speech Input to FastAPI
//   sendSpeech() {
//     this.isRecording = true;
//     this.chatbotService.sendSpeech(this.userId).subscribe(response => {
//       this.isRecording = false;
//       this.messages.push({ text: response.response, author: 'bot' });
//       this.scrollToBottom();
//     }, error => {
//       console.error("Error in speech recognition:", error);
//       this.isRecording = false;
//       this.messages.push({ text: "⚠️ Speech recognition failed.", author: 'bot' });
//     });
//   }
// }




// ----------------------------
// final Version  end
// ----------------------------


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;
//   isRecording: boolean = false;
//   recognition: any;
//   userId: string;
//   selectedVoice: SpeechSynthesisVoice | null = null;

//   constructor(private chatbotService: ChatbotService) {
//     this.userId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
//     this.messages.push({ text: "Hey there! 😊 How can I help you today?", author: "bot" });

//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.continuous = false;
//       this.recognition.lang = 'en-IN';
//       this.recognition.interimResults = false;

//       // Speech Recognized Event
//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript;
//         this.userMessage = transcript; 

//         // Only update chat area once
//         this.sendMessage(true); 
//       };

//       this.recognition.onerror = (event: any) => {
//         console.error("Speech recognition error:", event.error);
//         this.stopRecording();
//       };
//     } else {
//       console.warn("Speech Recognition not supported in this browser.");
//     }

//     // Pre-load available voices
//     this.loadVoices();
//   }

//   // Load Voices Once
//   loadVoices() {
//     window.speechSynthesis.onvoiceschanged = () => {
//       const voices = window.speechSynthesis.getVoices();
//       this.selectedVoice = voices.find(voice => voice.lang === 'en-IN' || voice.name.includes('Female')) || voices[0];
//     };
//   }

//   // Toggle Chat Window
//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   // Send User Message to FastAPI
//   sendMessage(isVoiceInput: boolean = false) {
//     if (this.userMessage.trim() === '') return;

//     // Add user message to chat
//     this.messages.push({ text: this.userMessage, author: 'user' });
//     this.scrollToBottom();

//     // Call FastAPI Service
//     this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(response => {
//       const botResponse = response.response;
//       this.messages.push({ text: botResponse, author: 'bot' }); 

//       if (isVoiceInput) {
//         this.speak(botResponse); // Speak only for voice input
//       }

//       this.scrollToBottom();
//     }, error => {
//       console.error("Error sending message:", error);
//       this.messages.push({ text: "⚠️ Oops! Something went wrong. Can you try again?", author: 'bot' });
//     });

//     this.userMessage = ''; 
//   }

//   // Scroll Chat Window to Bottom
//   scrollToBottom() {
//     setTimeout(() => {
//       const chatWindow = document.querySelector('.chat-window');
//       if (chatWindow) {
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//       }
//     }, 100);
//   }

//   // Start Speech Recognition
//   startRecording() {
//     if (!this.recognition) return;

//     this.isRecording = true;
//     this.recognition.start();
//   }

//   // Stop Speech Recognition
//   stopRecording() {
//     if (!this.recognition) return;

//     this.isRecording = false;
//     this.recognition.stop();
//   }

//   // Toggle Speech Recognition
//   toggleMic() {
//     if (this.isRecording) {
//       this.stopRecording();
//     } else {
//       this.startRecording();
//     }
//   }

//   // Convert Text to Speech
//   speak(text: string) {
//     if ('speechSynthesis' in window && this.selectedVoice) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = 'en-IN';
//       speech.pitch = 1.2;
//       speech.rate = 1;
//       speech.voice = this.selectedVoice; 

//       window.speechSynthesis.speak(speech);
//     } else {
//       console.warn("Text-to-Speech not supported in this browser.");
//     }
//   }
// }






// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;
//   isRecording: boolean = false;
//   recognition: any;
//   userId: string;
//   selectedVoice: SpeechSynthesisVoice | null = null;

//   constructor(private chatbotService: ChatbotService) {
//     this.userId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
//     this.messages.push({ text: "Hey there! 😊 How can I help you today?", author: "bot" });

//     this.initSpeechRecognition();
//     this.initSpeechSynthesis();
//   }

//   // Initialize Speech Recognition
//   initSpeechRecognition() {
//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.continuous = false;
//       this.recognition.lang = 'en-IN';
//       this.recognition.interimResults = false;

//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript.trim();
//         this.userMessage = transcript; 
//         this.sendMessage(true); // Only update chat once
//       };

//       this.recognition.onerror = (event: any) => {
//         console.error("Speech recognition error:", event.error);
//         this.stopRecording();
//       };
//     } else {
//       console.warn("Speech Recognition not supported in this browser.");
//     }
//   }

//   // Initialize Speech Synthesis
//   initSpeechSynthesis() {
//     window.speechSynthesis.onvoiceschanged = () => {
//       const voices = window.speechSynthesis.getVoices();
//       this.selectedVoice = voices.find(voice => voice.lang === 'en-IN' || voice.name.includes('Female')) || voices[0];
//     };

//     // Load voices immediately
//     if (window.speechSynthesis.getVoices().length > 0) {
//       this.selectedVoice = window.speechSynthesis.getVoices()[0];
//     }
//   }

//   // Toggle Chat Window
//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   // Send User Message to FastAPI
//   sendMessage(isVoiceInput: boolean = false) {
//     if (this.userMessage.trim() === '') return;

//     // Add user message to chat
//     this.messages.push({ text: this.userMessage, author: 'user' });
//     this.scrollToBottom();

//     // Call FastAPI Service
//     this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(response => {
//       const botResponse = response.response;
//       this.messages.push({ text: botResponse, author: 'bot' });

//       // Speak the response (fixing the speech issue)
//       if (isVoiceInput) {
//         setTimeout(() => {
//           this.speak(botResponse);
//         }, 500); // Small delay to ensure voice loads properly
//       }

//       this.scrollToBottom();
//     }, error => {
//       console.error("Error sending message:", error);
//       this.messages.push({ text: "⚠️ Oops! Something went wrong. Can you try again?", author: 'bot' });
//     });

//     this.userMessage = '';
//   }

//   // Scroll Chat Window to Bottom
//   scrollToBottom() {
//     setTimeout(() => {
//       const chatWindow = document.querySelector('.chat-window');
//       if (chatWindow) {
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//       }
//     }, 100);
//   }

//   // Start Speech Recognition
//   startRecording() {
//     if (!this.recognition) return;

//     this.isRecording = true;
//     this.recognition.start();
//   }

//   // Stop Speech Recognition
//   stopRecording() {
//     if (!this.recognition) return;

//     this.isRecording = false;
//     this.recognition.stop();
//   }

//   // Toggle Speech Recognition
//   toggleMic() {
//     if (this.isRecording) {
//       this.stopRecording();
//     } else {
//       this.startRecording();
//     }
//   }

//   // Convert Text to Speech
//   // speak(text: string) {
//   //   if ('speechSynthesis' in window && text && this.selectedVoice) {
//   //     const speech = new SpeechSynthesisUtterance(text);
//   //     speech.lang = 'en-IN';
//   //     speech.pitch = 1.2;
//   //     speech.rate = 1;
//   //     speech.voice = this.selectedVoice; 

//   //     speech.onend = () => {
//   //       console.log("Speech synthesis finished.");
//   //     };

//   //     speech.onerror = (error) => {
//   //       console.error("Speech synthesis error:", error);
//   //     };

//   //     window.speechSynthesis.speak(speech);
//   //   } else {
//   //     console.warn("Text-to-Speech not supported in this browser or voice not loaded.");
//   //   }
//   // }

//   speak(text: string) {
//       if ('speechSynthesis' in window && this.selectedVoice) {
//         const speech = new SpeechSynthesisUtterance(text);
//         speech.lang = 'en-IN';
//         speech.pitch = 1.2;
//         speech.rate = 1;
//         speech.voice = this.selectedVoice; 
  
//         window.speechSynthesis.speak(speech);
//       } else {
//         console.warn("Text-to-Speech not supported in this browser.");
//       }
//     }
  
// }









// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;
//   isRecording: boolean = false;
//   recognition: any;
//   userId: string;

//   constructor(private chatbotService: ChatbotService) {
//     // Generate a unique userId dynamically
//     this.userId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

//     // Initial bot message
//     this.messages.push({ text: "Hello! 👋 Im MindSage your personal Mental Health companion", author: "bot" });

//     // Speech Recognition Setup
//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.continuous = false;
//       this.recognition.lang = 'en-US';
//       this.recognition.interimResults = false;

//       // Speech Recognized Event
//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript;
//         this.userMessage = transcript; // Set input field with recognized text
//         this.sendMessage(true); // Automatically send recognized speech
//       };

//       // Handle Errors
//       this.recognition.onerror = (event: any) => {
//         console.error("Speech recognition error:", event.error);
//         this.stopRecording();
//       };
//     } else {
//       console.warn("Speech Recognition not supported in this browser.");
//     }
//   }

//   // Toggle Chat Window
//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   // Send User Message to FastAPI
//   sendMessage(isVoiceInput: boolean = false) {
//     if (this.userMessage.trim() === '') return;

//     // Add user message to chat
//     this.messages.push({ text: this.userMessage, author: 'user' });
//     this.scrollToBottom();

//     // Call FastAPI Service
//     this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(response => {
//       const botResponse = response.response;
//       this.messages.push({ text: botResponse, author: 'bot' });

//       // Convert bot response to speech if user used voice input
//       if (isVoiceInput) {
//         this.speak(botResponse);
//       }

//       this.scrollToBottom();
//     }, error => {
//       console.error("Error sending message:", error);
//       this.messages.push({ text: "⚠️ Error processing your request.", author: 'bot' });
//     });

//     this.userMessage = ''; // Clear input field
//   }

//   // Scroll Chat Window to Bottom
//   scrollToBottom() {
//     setTimeout(() => {
//       const chatWindow = document.querySelector('.chat-window');
//       if (chatWindow) {
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//       }
//     }, 100);
//   }

//   // Start Speech Recognition
//   startRecording() {
//     if (!this.recognition) return;

//     this.isRecording = true;
//     this.recognition.start();
//   }

//   // Stop Speech Recognition
//   stopRecording() {
//     if (!this.recognition) return;

//     this.isRecording = false;
//     this.recognition.stop();
//   }

//   // Toggle Speech Recognition
//   toggleMic() {
//     if (this.isRecording) {
//       this.stopRecording();
//     } else {
//       this.startRecording();
//     }
//   }

//   // Convert Text to Speech
//   speak(text: string) {
//     if ('speechSynthesis' in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = 'en-US';
//       window.speechSynthesis.speak(speech);
//     } else {
//       console.warn("Text-to-Speech not supported in this browser.");
//     }
//   }
// }










// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChatbotService } from '../../services/chatbot.service';
// import { HttpClient } from '@angular/common/http';

// import { Router } from '@angular/router'; // Import Router

// // In the constructor, inject the Router

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, author: string }[] = [];
//   userMessage: string = '';
//   isChatOpen: boolean = false;
//   isRecording: boolean = false;
//   recognition: any;
//   userId: string;
//   hasUserSentMessage: boolean = false; // Flag to track if the user has sent a message

//   constructor(private chatbotService: ChatbotService, private http: HttpClient, private router: Router) {
//     // Generate a unique userId dynamically
//     this.userId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;


//     // Initial bot message
//     this.messages.push({ text: "Hello! 👋 I'm MindSage, your personal Mental Health companion.", author: "bot" });

//     // Speech Recognition Setup
//     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       this.recognition = new SpeechRecognition();
//       this.recognition.continuous = false;
//       this.recognition.lang = 'en-US';
//       this.recognition.interimResults = false;

//       // Speech Recognized Event
//       this.recognition.onresult = (event: any) => {
//         const transcript = event.results[0][0].transcript;
//         this.userMessage = transcript; // Set input field with recognized text
//         this.sendMessage(true); // Automatically send recognized speech
//       };

//       // Handle Errors
//       this.recognition.onerror = (event: any) => {
//         console.error("Speech recognition error:", event.error);
//         this.stopRecording();
//       };
//     } else {
//       console.warn("Speech Recognition not supported in this browser.");
//     }
//   }

//   // Toggle Chat Window
//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//   }

//   // Send User Message to FastAPI
//   sendMessage(isVoiceInput: boolean = false) {
//     if (this.userMessage.trim() === '') return;

//     // Add user message to chat
//     this.messages.push({ text: this.userMessage, author: 'user' });
//     this.scrollToBottom();

//     // Set flag to true after the first message is sent
//     if (!this.hasUserSentMessage) {
//       this.hasUserSentMessage = true;
//     }

//     // Call FastAPI Service
//     this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(
//       (response: any) => {
//         const botResponse = response.response;
//         this.messages.push({ text: botResponse, author: 'bot' });

//         // Convert bot response to speech if user used voice input
//         if (isVoiceInput) {
//           this.speak(botResponse);
//         }

//         this.scrollToBottom();
//       },
//       (error) => {
//         console.error("Error sending message:", error);
//         this.messages.push({ text: "⚠️ Error processing your request.", author: 'bot' });
//       }
//     );

//     this.userMessage = ''; // Clear input field
//   }

//   // Scroll Chat Window to Bottom
//   scrollToBottom() {
//     setTimeout(() => {
//       const chatWindow = document.querySelector('.chat-window');
//       if (chatWindow) {
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//       }
//     }, 100);
//   }

//   // Start Speech Recognition
//   startRecording() {
//     if (!this.recognition) return;

//     this.isRecording = true;
//     this.recognition.start();
//   }

//   // Stop Speech Recognition
//   stopRecording() {
//     if (!this.recognition) return;

//     this.isRecording = false;
//     this.recognition.stop();
//   }

//   // Toggle Speech Recognition
//   toggleMic() {
//     if (this.isRecording) {
//       this.stopRecording();
//     } else {
//       this.startRecording();
//     }
//   }

//   // Convert Text to Speech
//   speak(text: string) {
//     if ('speechSynthesis' in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = 'en-US';
//       window.speechSynthesis.speak(speech);
//     } else {
//       console.warn("Text-to-Speech not supported in this browser.");
//     }
//   }

//   // // Generate and Download Report
//   // generateReport() {
//   //   this.http.get(`http://localhost:8000/generate-report/${this.userId}`, { responseType: 'blob' })
//   //     .subscribe(
//   //       (response: Blob) => {
//   //         // Create a download link for the report
//   //         const url = window.URL.createObjectURL(response);
//   //         const a = document.createElement('a');
//   //         a.href = url;
//   //         a.download = `report_${this.userId}.txt`;
//   //         a.click();
//   //         window.URL.revokeObjectURL(url);
//   //       },
//   //       (error) => {
//   //         console.error("Error generating report:", error);
//   //         this.messages.push({ text: "⚠️ Error generating the report.", author: 'bot' });
//   //       }
//   //     );
//   // }

//   // Modify the generateReport method
//   generateReport() {
//     // Navigate to the report page with the user ID as a query parameter
//     this.router.navigate(['/report'], { queryParams: { userId: this.userId } });
// }
// }





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../services/chatbot.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { text: string, author: string }[] = [];
  userMessage: string = '';
  isChatOpen: boolean = false;
  isRecording: boolean = false;
  recognition: any;
  userId: string;
  hasUserSentMessage: boolean = false; // Flag to track if the user has sent a message

  constructor(private chatbotService: ChatbotService, private http: HttpClient, private router: Router) {
    // Generate a unique userId dynamically
    this.userId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Initial bot message
    this.messages.push({ text: "Hello! 👋 I'm MindSage, your personal Mental Health companion.", author: "bot" });

    // Speech Recognition Setup
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;

      // Speech Recognized Event
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.userMessage = transcript; // Set input field with recognized text
        this.sendMessage(true); // Automatically send recognized speech
      };

      // Handle Errors
      this.recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        this.stopRecording();
      };
    } else {
      console.warn("Speech Recognition not supported in this browser.");
    }
  }

  // Toggle Chat Window
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  // Send User Message to FastAPI
  sendMessage(isVoiceInput: boolean = false) {
    if (this.userMessage.trim() === '') return;

    // Add user message to chat
    this.messages.push({ text: this.userMessage, author: 'user' });
    this.scrollToBottom();

    // Set flag to true after the first message is sent
    if (!this.hasUserSentMessage) {
      this.hasUserSentMessage = true;
    }

    // Call FastAPI Service
    this.chatbotService.sendMessage(this.userId, this.userMessage).subscribe(
      (response: any) => {
        const botResponse = response.response;
        this.messages.push({ text: botResponse, author: 'bot' });

        // Convert bot response to speech if user used voice input
        if (isVoiceInput) {
          this.speak(botResponse);
        }

        this.scrollToBottom();
      },
      (error) => {
        console.error("Error sending message:", error);
        this.messages.push({ text: "⚠️ Error processing your request.", author: 'bot' });
      }
    );

    this.userMessage = ''; // Clear input field
  }

  // Scroll Chat Window to Bottom
  scrollToBottom() {
    setTimeout(() => {
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    }, 100);
  }

  // Start Speech Recognition
  startRecording() {
    if (!this.recognition) return;

    this.isRecording = true;
    this.recognition.start();
  }

  // Stop Speech Recognition
  stopRecording() {
    if (!this.recognition) return;

    this.isRecording = false;
    this.recognition.stop();
  }

  // Toggle Speech Recognition
  toggleMic() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  // Convert Text to Speech
  speak(text: string) {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
    } else {
      console.warn("Text-to-Speech not supported in this browser.");
    }
  }

 //Navigate to the report page
  generateReport() {
    this.router.navigate(['/report'], { queryParams: { userId: this.userId } });
  }

}