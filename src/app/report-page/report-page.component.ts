// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-report-page',
//   standalone: true,
//   templateUrl: './report-page.component.html',
//   styleUrls: ['./report-page.component.css']
// })
// export class ReportPageComponent implements OnInit {
//   userId: string = '';
//   chatHistory: { role: string, content: string }[] = [];
//   reportContent: string = '';
//   isLoading: boolean = false;
//   showChatHistory: boolean = false;
//   showReport: boolean = false;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit() {
//     // Get the user ID from the query parameters
//     this.route.queryParams.subscribe(params => {
//       this.userId = params['userId'];
//     });
//   }

//   // Load Chat History
//   loadChatHistory() {
//     this.isLoading = true;
//     this.showChatHistory = true;
//     this.showReport = false;

//     this.http.get(`http://localhost:8000/chat-history/${this.userId}`)
//       .subscribe(
//         (response: any) => {
//           this.chatHistory = response.chat_history;
//           this.isLoading = false;
//         },
//         (error) => {
//           console.error("Error fetching chat history:", error);
//           this.isLoading = false;
//         }
//       );
//   }

//   // Generate Report
//   generateReport() {
//     this.isLoading = true;
//     this.showChatHistory = false;
//     this.showReport = true;

//     this.http.get(`http://localhost:8000/generate-report/${this.userId}`)
//       .subscribe(
//         (response: any) => {
//           this.reportContent = response.report;
//           this.isLoading = false;
//         },
//         (error) => {
//           console.error("Error generating report:", error);
//           this.isLoading = false;
//         }
//       );
//   }
// }


// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { NgxGaugeModule } from 'ngx-gauge';

// @Component({
//   selector: 'app-report-page',
//   standalone: true,
//   imports: [CommonModule, NgxGaugeModule], // Import CommonModule for *ngIf and *ngFor
//   templateUrl: './report-page.component.html',
//   styleUrls: ['./report-page.component.css'],
//   encapsulation: ViewEncapsulation.None,
// })
// export class ReportPageComponent implements OnInit {
//   userId: string = '';
//   chatHistory: { role: string, content: string }[] = [];
//   reportContent: string = '';
//   isLoading: boolean = false;
//   showChatHistory: boolean = false;
//   showReport: boolean = false;

//   // Emotion Speedometer Variables
//   emotionHistory: string[] = [];
//   gaugeValue: number = 0;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit() {
//     // Get the user ID from the query parameters
//     this.route.queryParams.subscribe(params => {
//       this.userId = params['userId'];
//       console.log("User ID:", this.userId); // Debugging: Log the user ID
//     });
//   }

//   // 🎯 Load Chat History
//   loadChatHistory() {
//     this.isLoading = true;
//     this.showChatHistory = true;
//     this.showReport = false;

//     this.http.get(`http://localhost:8000/chat-history/${this.userId}`)
//       .subscribe(
//         (response: any) => {
//           this.chatHistory = response.chat_history;
//           this.isLoading = false;
//         },
//         (error) => {
//           console.error("Error fetching chat history:", error);
//           this.isLoading = false;
//         }
//       );
//   }

//   // 🎯 Generate Report
//   generateReport() {
//     this.isLoading = true;
//     this.showChatHistory = false;
//     this.showReport = true;

//     this.http.get(`http://localhost:8000/generate-report/${this.userId}`)
//       .subscribe(
//         (response: any) => {
//           this.reportContent = response.report;
//           this.isLoading = false;
//         },
//         (error) => {
//           console.error("Error generating report:", error);
//           this.isLoading = false;
//         }
//       );
//   }

//   // 🎯 Fetch Emotion History for Speedometer
//   fetchEmotionHistory() {
//     this.http.get<{ emotion_history: string[] }>(`http://localhost:8000/get-emotion-history/${this.userId}`)
//       .subscribe(response => {
//         this.emotionHistory = response.emotion_history;
//         this.updateGaugeValue();
//       }, error => {
//         console.error("Error fetching emotion history:", error);
//       });
//   }

//   // 🎯 Convert Emotion to Gauge Value
//   updateGaugeValue() {
//     if (this.emotionHistory.length === 0) {
//       this.gaugeValue = 0;
//       return;
//     }

//     const emotionScores: { [key: string]: number } = {
//       "anger": 10,
//       "disgust": 20,
//       "fear": 30,
//       "sadness": 40,
//       "neutral": 50,
//       "surprise": 70,
//       "joy": 90
//     };

//     const lastEmotion = this.emotionHistory[this.emotionHistory.length - 1];
//     this.gaugeValue = emotionScores[lastEmotion] || 50; // Default to 50 if unknown
//   }
// }




import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';
import { Route } from '@angular/router';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [CommonModule, NgxGaugeModule],
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportPageComponent implements OnInit {
  userId: string = '';
  chatHistory: { role: string, content: string }[] = [];
  reportContent: string = '';
  isLoading: boolean = false;
  showChatHistory: boolean = false;
  showReport: boolean = false;

  // Emotion Speedometer Variables
  emotionHistory: string[] = [];
  gaugeValue: number = 0;
  gaugeLabel: string = 'Neutral';

  gaugeOptions = {
    max: 100,
    thick: 15,
    cap: 'round',
    label: (value: number) => `${value}% Emotional Intensity`
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Get the user ID from the query parameters
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log("User ID:", this.userId);

      // Automatically fetch emotion history when the page loads
      this.fetchEmotionHistory();
    });
  }

  // 🎯 Fetch Emotion History from Backend
  fetchEmotionHistory() {
    if (!this.userId) {
      console.warn("No User ID found. Cannot fetch emotions.");
      return;
    }

    this.http.get<{ emotion_history: string[] }>(`http://localhost:8000/get-emotion-history/${this.userId}`)
      .subscribe(response => {
        this.emotionHistory = response.emotion_history;
        this.updateGaugeValue();
      }, error => {
        console.error("Error fetching emotion history:", error);
      });
  }

  // // 🎯 Convert Emotion to Gauge Value
  // updateGaugeValue() {
  //   if (this.emotionHistory.length === 0) {
  //     this.gaugeValue = 50;
  //     this.gaugeLabel = 'Neutral';
  //     return;
  //   }

  //   const emotionScores: { [key: string]: { value: number, label: string } } = {
  //     "anger": { value: 10, label: "Angry" },
  //     "disgust": { value: 20, label: "Disgusted" },
  //     "fear": { value: 30, label: "Fearful" },
  //     "sadness": { value: 40, label: "Sad" },
  //     "neutral": { value: 50, label: "Neutral" },
  //     "surprise": { value: 70, label: "Surprised" },
  //     "joy": { value: 90, label: "Joyful" }
  //   };
    

  //   const lastEmotion = this.emotionHistory[this.emotionHistory.length - 1];
  //   const emotionData = emotionScores[lastEmotion] || { value: 50, label: "Neutral" };
    
  //   this.gaugeValue = emotionData.value;
  //   this.gaugeLabel = emotionData.label;
  // }

  getGaugeColor(): string {
    if (this.gaugeValue < 30) return "#ff0000";  // Red for negative emotions
    if (this.gaugeValue < 50) return "#ff9900";  // Orange for mild negativity
    if (this.gaugeValue < 70) return "#ffff00";  // Yellow for neutral
    return "#00ff00";  // Green for positive emotions
  }

  // 🎯 Convert Multiple Emotions to Gauge Value
  // updateGaugeValue() {
  //   if (this.emotionHistory.length === 0) {
  //     this.gaugeValue = 50; // Default to Neutral
  //     this.gaugeLabel = 'Neutral';
  //     return;
  //   }

  //   // Emotion Scores Mapping
  //   const emotionScores: { [key: string]: { value: number, label: string } } = {
  //     "anger": { value: 10, label: "Angry" },
  //     "disgust": { value: 20, label: "Disgusted" },
  //     "fear": { value: 30, label: "Fearful" },
  //     "sadness": { value: 40, label: "Sad" },
  //     "neutral": { value: 50, label: "Neutral" },
  //     "surprise": { value: 70, label: "Surprised" },
  //     "joy": { value: 90, label: "Joyful" }
  //   };

  //   // 🎯 Compute Average Score for Multiple Emotions
  //   let totalScore = 0;
  //   let count = this.emotionHistory.length;

  //   this.emotionHistory.forEach(emotion => {
  //     totalScore += emotionScores[emotion]?.value || 50; // Default Neutral if not found
  //   });

  //   const averageScore = totalScore / count;

  //   // 🎯 Find Closest Emotion Label for Display
  //   let closestEmotion = "Neutral";
  //   let minDiff = Infinity;

  //   for (const emotion in emotionScores) {
  //     const diff = Math.abs(averageScore - emotionScores[emotion].value);
  //     if (diff < minDiff) {
  //       minDiff = diff;
  //       closestEmotion = emotionScores[emotion].label;
  //     }
  //   }

  //   // 🎯 Set Gauge Values
  //   this.gaugeValue = Math.round(averageScore);
  //   this.gaugeLabel = closestEmotion;
  // }

  // updateGaugeValue() {
  //   if (!this.emotionHistory || this.emotionHistory.length === 0) {
  //     this.gaugeValue = 50; // Default to Neutral
  //     this.gaugeLabel = 'Neutral';
  //     return;
  //   }
  
  //   const emotionScores: { [key: string]: { value: number, label: string } } = {
  //     "anger": { value: 10, label: "Angry" },
  //     "disgust": { value: 20, label: "Disgusted" },
  //     "fear": { value: 30, label: "Fearful" },
  //     "sadness": { value: 40, label: "Sad" },
  //     "neutral": { value: 50, label: "Neutral" },
  //     "surprise": { value: 70, label: "Surprised" },
  //     "joy": { value: 90, label: "Joyful" }
  //   };
  
  //   // 📌 Count occurrences of each emotion
  //   const emotionCount: { [key: string]: number } = {};
  
  //   this.emotionHistory.forEach(emotion => {
  //     emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
  //   });
  
  //   // 🎯 Find the most frequently occurring emotion
  //   let mostFrequentEmotion = "neutral";
  //   let maxCount = 0;
  
  //   for (const emotion in emotionCount) {
  //     if (emotionCount[emotion] > maxCount) {
  //       maxCount = emotionCount[emotion];
  //       mostFrequentEmotion = emotion;
  //     }
  //   }
  
  //   // 🔥 Get the gauge value & label from the most significant emotion
  //   const emotionData = emotionScores[mostFrequentEmotion] || { value: 50, label: "Neutral" };
  
  //   this.gaugeValue = emotionData.value;
  //   this.gaugeLabel = emotionData.label;
  // }
  


  updateGaugeValue() {
    if (!this.emotionHistory || this.emotionHistory.length === 0) {
        this.gaugeValue = 50; // Default to Neutral
        this.gaugeLabel = "😐 Neutral"; // Default Label
        return;
    }

    const emotionScores: { [key: string]: { value: number, emoji: string, label: string } } = {
        "anger": { value: 10, emoji: "😡", label: "Angry" },
        "disgust": { value: 20, emoji: "🤢", label: "Disgusted" },
        "fear": { value: 30, emoji: "😨", label: "Fearful" },
        "sadness": { value: 40, emoji: "😢", label: "Sad" },
        "neutral": { value: 50, emoji: "😐", label: "Neutral" },
        "surprise": { value: 70, emoji: "😲", label: "Surprised" },
        "joy": { value: 90, emoji: "😊", label: "Joyful" }
    };

    // 📌 Count occurrences of each emotion
    const emotionCount: { [key: string]: number } = {};

    this.emotionHistory.forEach(emotion => {
        emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });

    // 🎯 Find the most frequently occurring emotion
    let mostFrequentEmotion = "neutral";
    let maxCount = 0;

    for (const emotion in emotionCount) {
        if (emotionCount[emotion] > maxCount) {
            maxCount = emotionCount[emotion];
            mostFrequentEmotion = emotion;
        }
    }

    // 🔥 Get the gauge value, emoji, and label from the most significant emotion
    const emotionData = emotionScores[mostFrequentEmotion] || { value: 50, emoji: "😐", label: "Neutral" };

    this.gaugeValue = emotionData.value;
    this.gaugeLabel = `${emotionData.emoji} ${emotionData.label}`; // 🔥 Emoji + Text Label
}

  



  // ✅ Load Chat History (Original Function - Unchanged)
  loadChatHistory() {
    this.isLoading = true;
    this.showChatHistory = true;
    this.showReport = false;

    this.http.get(`http://localhost:8000/chat-history/${this.userId}`)
      .subscribe(
        (response: any) => {
          this.chatHistory = response.chat_history;
          this.isLoading = false;
        },
        (error) => {
          console.error("Error fetching chat history:", error);
          this.isLoading = false;
        }
      );
  }
  // Example function that receives emotions from user input
  receiveEmotions(emotions: string[]) {
    this.emotionHistory = emotions;  // Store emotions
    this.updateGaugeValue();  // Update gauge value
  }

  // ✅ Generate Report (Original Function - Unchanged)
  generateReport() {
    this.isLoading = true;
    this.showChatHistory = false;
    this.showReport = true;

    this.http.get(`http://localhost:8000/generate-report/${this.userId}`)
      .subscribe(
        (response: any) => {
          this.reportContent = response.report;
          this.isLoading = false;
        },
        (error) => {
          console.error("Error generating report:", error);
          this.isLoading = false;
        }
      );
  }
}
