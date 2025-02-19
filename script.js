// // Initialize speech recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.continuous = false;
// recognition.interimResults = false;
// recognition.lang = "en-US";

// // Start recording
// document.getElementById("start-recording").addEventListener("click", function () {
//     recognition.start();
//     console.log("🎙️ Recording started...");
// });

// // Stop recording
// document.getElementById("stop-recording").addEventListener("click", function () {
//     recognition.stop();
//     console.log("🛑 Recording stopped.");
// });

// // Handle speech recognition result
// recognition.onresult = function (event) {
//     let transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("💬 Raw Transcript:", transcript);
//     document.getElementById("transcript").textContent = `"${transcript}"`;
//     processTranscription(transcript);
// };

// // Process extracted text and categorize
// function processTranscription(transcript) {
//     let meetingMatch = transcript.match(/\b(meeting|conference|call)\b(.*?)(on|at)?\s*(.*)/i);
//     let taskMatch = transcript.match(/\b(todo|task|finish|complete|submit|deadline)\b(.*)/i);
//     let reminderMatch = transcript.match(/\b(remind|reminder|remember)\b(.*)/i);

//     let meetingInfo = meetingMatch ? extractDates(meetingMatch[4] || "") : null;
//     let taskInfo = taskMatch ? taskMatch[2].trim() : null;
//     let reminderInfo = reminderMatch ? reminderMatch[2].trim() : null;

//     console.log("🟢 Meeting Info:", meetingInfo);
//     console.log("🟡 Task Info:", taskInfo);
//     console.log("🔴 Reminder Info:", reminderInfo);

//     // Update UI based on extracted info
//     updateUI("meeting-info", meetingInfo ? `📅 Meeting: ${meetingInfo.date} at ${meetingInfo.time}` : "");
//     updateUI("task-info", taskInfo ? `📝 Task: ${taskInfo}` : "");
//     updateUI("reminder-info", reminderInfo ? `🔔 Reminder: ${reminderInfo}` : "");
// }

// // Extract dates and times using regex (No Chrono.js needed)
// function extractDates(text) {
//     console.log("📅 Extracting Date-Time from:", text);

//     let datePattern = /(?:\b(mon|tue|wed|thu|fri|sat|sun)(?:day)?\b|\b\d{1,2}[\/\-\s]?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\/\-\s]?\d{0,4}\b|\b\d{1,2}[\/\-\s]\d{1,2}[\/\-\s]?\d{2,4}\b)/i;
//     let timePattern = /\b\d{1,2}:\d{2}\s?(AM|PM)?\b|\b\d{1,2}\s?(AM|PM)\b/i;

//     let dateMatch = text.match(datePattern);
//     let timeMatch = text.match(timePattern);

//     return {
//         date: dateMatch ? dateMatch[0] : "Today",
//         time: timeMatch ? timeMatch[0] : "Anytime"
//     };
// }

// // Update UI with extracted values
// function updateUI(elementId, text) {
//     let element = document.getElementById(elementId);
//     if (text) {
//         element.textContent = text;
//         element.style.display = "block"; // Show element if data is present
//     } else {
//         element.style.display = "none"; // Hide if no data
//     }
// }

// // Handle errors in speech recognition
// recognition.onerror = function (event) {
//     console.error("❌ Speech recognition error:", event.error);
// };



// part-2

// Initialize speech recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.continuous = false;
// recognition.interimResults = false;
// recognition.lang = "en-US";

// // Start recording
// document.getElementById("start-recording").addEventListener("click", function () {
//     recognition.start();
//     console.log("🎙️ Recording started...");
// });

// // Stop recording
// document.getElementById("stop-recording").addEventListener("click", function () {
//     recognition.stop();
//     console.log("🛑 Recording stopped.");
// });

// // Handle speech recognition result
// recognition.onresult = function (event) {
//     let transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("💬 Raw Transcript:", transcript);
//     document.getElementById("transcript").textContent = `"${transcript}"`;
//     processTranscription(transcript);
// };

// // Process extracted text and categorize
// function processTranscription(transcript) {
//     let meetingMatch = transcript.match(/\b(meeting|conference|call)\b(.*?)(on|at)?\s*(.*)/i);
//     let taskMatch = transcript.match(/\b(todo|task|finish|complete|submit|deadline)\b(.*)/i);
//     let reminderMatch = transcript.match(/\b(remind|reminder|remember)\b(.*)/i);

//     let meetingInfo = meetingMatch ? extractDates(meetingMatch[4] || "") : null;
//     let taskInfo = taskMatch ? taskMatch[2].trim() : null;
//     let reminderInfo = reminderMatch ? reminderMatch[2].trim() : null;

//     console.log("🟢 Meeting Info:", meetingInfo);
//     console.log("🟡 Task Info:", taskInfo);
//     console.log("🔴 Reminder Info:", reminderInfo);

//     // Update UI based on extracted info
//     updateUI("meeting-info", meetingInfo ? `📅 Meeting: ${meetingInfo.date} at ${meetingInfo.time}` : "");
//     updateUI("task-info", taskInfo ? `📝 Task: ${taskInfo}` : "");
//     updateUI("reminder-info", reminderInfo ? `🔔 Reminder: ${reminderInfo}` : "");

//     // Create calendar event
//     if (meetingInfo) {
//         createCalendarEvent(meetingInfo);
//     }

//     // Generate todo item
//     if (taskInfo) {
//         generateTodoItem(taskInfo);
//     }

//     // Create meeting summary
//     if (meetingInfo || taskInfo || reminderInfo) {
//         createMeetingSummary(transcript);
//     }

//     // Share key points via email
//     if (meetingInfo || taskInfo || reminderInfo) {
//         shareKeyPoints(transcript);
//     }
// }

// // Extract dates and times using regex (No Chrono.js needed)
// function extractDates(text) {
//     console.log("📅 Extracting Date-Time from:", text);

//     let datePattern = /(?:\b(mon|tue|wed|thu|fri|sat|sun)(?:day)?\b|\b\d{1,2}[\/\-\s]?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\/\-\s]?\d{0,4}\b|\b\d{1,2}[\/\-\s]\d{1,2}[\/\-\s]?\d{2,4}\b)/i;
//     let timePattern = /\b\d{1,2}:\d{2}\s?(AM|PM)?\b|\b\d{1,2}\s?(AM|PM)\b/i;

//     let dateMatch = text.match(datePattern);
//     let timeMatch = text.match(timePattern);

//     return {
//         date: dateMatch ? dateMatch[0] : "Today",
//         time: timeMatch ? timeMatch[0] : "Anytime"
//     };
// }

// // Update UI with extracted values
// function updateUI(elementId, text) {
//     let element = document.getElementById(elementId);
//     if (text) {
//         element.textContent = text;
//         element.style.display = "block"; // Show element if data is present
//     } else {
//         element.style.display = "none"; // Hide if no data
//     }
// }

// // Handle errors in speech recognition
// recognition.onerror = function (event) {
//     console.error("❌ Speech recognition error:", event.error);
// };

// // ================== NEW FEATURES ==================

// // 1. Create Calendar Event
// function createCalendarEvent(meetingInfo) {
//     console.log("📅 Creating Calendar Event:", meetingInfo);
//     // Example: Integrate with Google Calendar API
//     // For now, just log the event details
//     alert(`Calendar Event Created:\nDate: ${meetingInfo.date}\nTime: ${meetingInfo.time}`);
// }

// // 2. Generate Todo Item
// function generateTodoItem(taskInfo) {
//     console.log("📝 Generating Todo Item:", taskInfo);
//     // Example: Integrate with Todoist API
//     // For now, just log the task details
//     alert(`Todo Item Created:\nTask: ${taskInfo}`);
// }

// // 3. Create Meeting Summary Notes
// function createMeetingSummary(transcript) {
//     console.log("📄 Creating Meeting Summary:", transcript);
//     // Example: Use OpenAI API for summarization
//     // For now, just log the summary
//     let summary = `Meeting Summary:\n${transcript}`;
//     alert(summary);
// }

// // 4. Share Key Points via Email/Messaging
// function shareKeyPoints(transcript) {
//     console.log("📧 Sharing Key Points:", transcript);
//     // Example: Use EmailJS or Twilio API for email/messaging
//     // For now, just log the key points
//     let keyPoints = `Key Points:\n${transcript}`;
//     alert(`Key Points Shared:\n${keyPoints}`);
// }


//part-3

// Initialize speech recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.continuous = false;
// recognition.interimResults = false;
// recognition.lang = "en-US";

// // Ensure HTML elements exist before adding event listeners
// document.addEventListener("DOMContentLoaded", function () {
//     const startButton = document.getElementById("start-recording");
//     const stopButton = document.getElementById("stop-recording");

//     if (startButton) {
//         startButton.addEventListener("click", function () {
//             recognition.start();
//             console.log("🎙️ Recording started...");
//         });
//     }

//     if (stopButton) {
//         stopButton.addEventListener("click", function () {
//             recognition.stop();
//             console.log("🛑 Recording stopped.");
//         });
//     }
// });

// // Handle speech recognition result
// recognition.onresult = function (event) {
//     let transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("💬 Raw Transcript:", transcript);

//     const transcriptElement = document.getElementById("transcript");
//     if (transcriptElement) {
//         transcriptElement.textContent = `"${transcript}"`;
//     }

//     processTranscription(transcript);
// };

// // Process extracted text and categorize
// function processTranscription(transcript) {
//     let meetingMatch = transcript.match(/\b(meeting|conference|call)\b(.*?)(on|at)?\s*(.*)/i);
//     let taskMatch = transcript.match(/\b(todo|task|finish|complete|submit|deadline)\b(.*)/i);
//     let reminderMatch = transcript.match(/\b(remind|reminder|remember)\b(.*)/i);

//     let meetingInfo = meetingMatch ? extractDates(meetingMatch[4] || "") : null;
//     let taskInfo = taskMatch ? taskMatch[2].trim() : null;
//     let reminderInfo = reminderMatch ? reminderMatch[2].trim() : null;

//     console.log("🟢 Meeting Info:", meetingInfo);
//     console.log("🟡 Task Info:", taskInfo);
//     console.log("🔴 Reminder Info:", reminderInfo);

//     updateUI("meeting-info", meetingInfo ? `📅 Meeting: ${meetingInfo.date} at ${meetingInfo.time}` : "");
//     updateUI("task-info", taskInfo ? `📝 Task: ${taskInfo}` : "");
//     updateUI("reminder-info", reminderInfo ? `🔔 Reminder: ${reminderInfo}` : "");

//     if (meetingInfo) generateCalendarFile(meetingInfo);
//     if (taskInfo) sendTodoListEmail(taskInfo);
// }

// // Extract dates and times using regex
// function extractDates(text) {
//     console.log("📅 Extracting Date-Time from:", text);

//     let datePattern = /(?:\b(mon|tue|wed|thu|fri|sat|sun)(?:day)?\b|\b\d{1,2}[\/\-\s]?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\/\-\s]?\d{0,4}\b|\b\d{1,2}[\/\-\s]\d{1,2}[\/\-\s]?\d{2,4}\b)/i;
//     let timePattern = /\b\d{1,2}:\d{2}\s?(AM|PM)?\b|\b\d{1,2}\s?(AM|PM)\b/i;

//     let dateMatch = text.match(datePattern);
//     let timeMatch = text.match(timePattern);

//     return {
//         date: dateMatch ? dateMatch[0] : "Today",
//         time: timeMatch ? timeMatch[0] : "Anytime"
//     };
// }

// // Update UI with extracted values
// function updateUI(elementId, text) {
//     let element = document.getElementById(elementId);
//     if (element) {
//         element.textContent = text;
//         element.style.display = text ? "block" : "none";
//     }
// }

// // Handle errors in speech recognition
// recognition.onerror = function (event) {
//     console.error("❌ Speech recognition error:", event.error);
//     alert("Speech recognition error: " + event.error);
// };

// // ================== NEW FEATURES ==================

// // 1. Generate Calendar File (ICS)
// function createCalendarEvent(title, description, startDate, endDate) {
//     // Ensure dates are valid
//     if (!startDate || !endDate || isNaN(new Date(startDate)) || isNaN(new Date(endDate))) {
//         console.error("❌ Invalid date or time format. Cannot create calendar file.");
//         alert("❌ Invalid date format. Please check your input.");
//         return;
//     }

//     // Convert dates to ISO 8601 format (YYYYMMDDTHHmmssZ)
//     let formattedStart = new Date(startDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
//     let formattedEnd = new Date(endDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

//     // ICS file content
//     let icsContent = `BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//Your Company//NONSGML Event//EN
// BEGIN:VEVENT
// UID:${Date.now()}@yourdomain.com
// DTSTAMP:${formattedStart}
// DTSTART:${formattedStart}
// DTEND:${formattedEnd}
// SUMMARY:${title}
// DESCRIPTION:${description}
// END:VEVENT
// END:VCALENDAR`;

//     // Create a downloadable .ics file
//     let blob = new Blob([icsContent], { type: "text/calendar" });
//     let link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "event.ics";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     console.log("📅 Calendar event created successfully.");
// }

// // 2. Send Todo List via Email
// function sendTodoListEmail(taskInfo) {
//     console.log("📧 Sending Todo List via Email:", taskInfo);

//     if (!window.emailjs) {
//         alert("❌ EmailJS is not loaded. Cannot send email.");
//         return;
//     }

//     emailjs.init("ECWAeODiG_0mClBVi"); // Replace with your EmailJS user ID

//     const emailParams = {
//         to_email: "mohammadkavish407@gmail.com", // Replace with user's email
//         subject: "Your Todo List",
//         message: `Here is your todo item:\n${taskInfo}`
//     };

//     emailjs.send("service_m0vumue", "template_y1f6qod", emailParams)
//         .then(function (response) {
//             console.log("✅ Email sent successfully:", response);
//             alert("📧 Todo list sent to your email.");
//         })
//         .catch(function (error) {
//             console.error("❌ Email sending failed:", error);
//             alert("❌ Failed to send email. Please try again.");
//         });
// }


//part-4

// document.addEventListener("DOMContentLoaded", function () {
//     let recognition;
//     let transcriptText = "";
    
//     const startButton = document.getElementById("start-recording");
//     const stopButton = document.getElementById("stop-recording");
//     const transcriptDisplay = document.getElementById("transcript");
//     const meetingInfo = document.getElementById("meeting-info");
//     const taskInfo = document.getElementById("task-info");
//     const reminderInfo = document.getElementById("reminder-info");
//     const sendEmailButton = document.getElementById("send-email");

//     function setupSpeechRecognition() {
//         if (!("webkitSpeechRecognition" in window)) {
//             alert("Speech Recognition not supported in this browser. Try Chrome!");
//             return;
//         }

//         recognition = new webkitSpeechRecognition();
//         recognition.continuous = true;
//         recognition.interimResults = true;
//         recognition.lang = "en-US";

//         recognition.onstart = function () {
//             transcriptText = "";
//             transcriptDisplay.textContent = "🎙️ Listening...";
//             startButton.disabled = true;
//             stopButton.disabled = false;
//         };

//         recognition.onresult = function (event) {
//             let interimTranscript = "";
//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 if (event.results[i].isFinal) {
//                     transcriptText += event.results[i][0].transcript + " ";
//                 } else {
//                     interimTranscript += event.results[i][0].transcript;
//                 }
//             }
//             transcriptDisplay.textContent = transcriptText + interimTranscript;
//         };

//         recognition.onerror = function (event) {
//             console.error("Speech Recognition Error:", event.error);
//             alert("Error with speech recognition. Try again.");
//             startButton.disabled = false;
//             stopButton.disabled = true;
//         };

//         recognition.onend = function () {
//             startButton.disabled = false;
//             stopButton.disabled = true;
//             extractActionItems();
//         };

//         recognition.start();
//     }

//     function extractActionItems() {
//         if (!transcriptText) {
//             alert("No speech detected!");
//             return;
//         }

//         // Simple extraction logic (can be replaced with NLP)
//         const taskRegex = /task (.*?)(?=\.|$)/i;
//         const dateRegex = /on (\w+ \d{1,2}, \d{4})|(\d{1,2}\/\d{1,2}\/\d{4})/i;

//         const taskMatch = transcriptText.match(taskRegex);
//         const dateMatch = transcriptText.match(dateRegex);

//         if (taskMatch) {
//             taskInfo.textContent = "📝 Task: " + taskMatch[1];
//             taskInfo.style.display = "block";
//         }

//         if (dateMatch) {
//             meetingInfo.textContent = "📅 Meeting Date: " + dateMatch[0];
//             meetingInfo.style.display = "block";
//         }

//         reminderInfo.textContent = "✅ Summary Ready!";
//         reminderInfo.style.display = "block";
//     }

//     function sendSummaryEmail() {
//         emailjs.init("ECWAeODiG_0mClBVi");

//         const emailParams = {
//             to_email: "mohammadkavish407@gmail.com",
//             subject: "Meeting Notes & Tasks",
//             message: `
//                 📜 **Transcription:**
//                 ${transcriptText}

//                 📅 **Extracted Information:**
//                 ${meetingInfo.textContent}
//                 ${taskInfo.textContent}
//                 ${reminderInfo.textContent}
//             `
//         };

//         emailjs.send("service_m0vumue", "template_y1f6qod", emailParams)
//             .then(function (response) {
//                 console.log("✅ Email sent successfully:", response);
//                 alert("📧 Summary sent to your email.");
//             })
//             .catch(function (error) {
//                 console.error("❌ Email sending failed:", error);
//                 alert("❌ Failed to send email. Please try again.");
//             });
//     }

//     startButton.addEventListener("click", setupSpeechRecognition);
//     stopButton.addEventListener("click", function () {
//         recognition.stop();
//     });

//     sendEmailButton.addEventListener("click", sendSummaryEmail);
// });




document.addEventListener("DOMContentLoaded", function () {
    let recognition;
    let transcriptText = "";
    
    const startButton = document.getElementById("start-recording");
    const stopButton = document.getElementById("stop-recording");
    const transcriptDisplay = document.getElementById("transcript");
    const meetingInfo = document.getElementById("meeting-info");
    const taskInfo = document.getElementById("task-info");
    const reminderInfo = document.getElementById("reminder-info");
    const summaryContent = document.getElementById("summary-content");
    const sendEmailButton = document.getElementById("send-email");

    function setupSpeechRecognition() {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Speech Recognition not supported in this browser. Try Chrome!");
            return;
        }

        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = function () {
            transcriptText = "";
            transcriptDisplay.textContent = "🎙️ Listening...";
            startButton.disabled = true;
            stopButton.disabled = false;
};

recognition.onresult = function (event) {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            transcriptText += event.results[i][0].transcript + " ";
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    transcriptDisplay.textContent = transcriptText + interimTranscript;
};

recognition.onerror = function (event) {
    console.error("Speech Recognition Error:", event.error);
    alert("Error with speech recognition. Try again.");
    startButton.disabled = false;
    stopButton.disabled = true;
};

recognition.onend = function () {
    startButton.disabled = false;
    stopButton.disabled = true;
    extractActionItems();
};

recognition.start();
}

function extractActionItems() {
if (!transcriptText) {
    alert("No speech detected!");
    return;
}

const taskRegex = /task (.*?)(?=\.|$)/i;
const dateRegex = /on (\w+ \d{1,2}, \d{4})|(\d{1,2}\/\d{1,2}\/\d{4})/i;

const taskMatch = transcriptText.match(taskRegex);
const dateMatch = transcriptText.match(dateRegex);

if (taskMatch) {
    taskInfo.textContent = "📝 Task: " + taskMatch[1];
}

if (dateMatch) {
    meetingInfo.textContent = "📅 Meeting Date: " + dateMatch[0];
}

reminderInfo.textContent = "✅ Summary Ready!";
summaryContent.textContent = `Transcription: ${transcriptText}\n\nMeeting: ${meetingInfo.textContent}\nTask: ${taskInfo.textContent}`;
}

function sendSummaryEmail() {
emailjs.init("ECWAeODiG_0mClBVi");

const emailParams = {
    to_email: "mohammadkavish407@gmail.com",
    subject: "Meeting Notes & Tasks",
    message: summaryContent.textContent
};

emailjs.send("service_m0vumue", "template_y1f6qod", emailParams)
    .then(function (response) {
        console.log("✅ Email sent successfully:", response);
        alert("📧 Summary sent to your email.");
    })
    .catch(function (error) {
        console.error("❌ Email sending failed:", error);
        alert("❌ Failed to send email. Please try again.");
    });
}

startButton.addEventListener("click", setupSpeechRecognition);
stopButton.addEventListener("click", function () {
recognition.stop();
});

sendEmailButton.addEventListener("click", sendSummaryEmail);
});