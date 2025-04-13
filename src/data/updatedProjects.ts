import { ProjectData } from './sampleData';

// Updated project data from the provided READMEs
export const updatedProjects: ProjectData[] = [
  {
    slug: "navicast-maritime-intelligence",
    title: "NAVICAST - Maritime Traffic Intelligence Platform",
    description: "A comprehensive system for collecting, processing, and visualizing maritime vessel traffic data from AIS feeds. The platform provides real-time vessel tracking, trajectory prediction, and data querying capabilities.",
    technologies: ["Python", "PostgreSQL", "Machine Learning", "FastAPI", "MQTT", "Leaflet.js", "Random Forest", "API Development"],
    repoUrl: "https://github.com/imaddde867/NaviCast",
    demoUrl: "http://navicast.tech",
    image: "/images/navicast.png",
    longDescription: `NAVICAST is a comprehensive system for collecting, processing, and visualizing maritime vessel traffic data from AIS (Automatic Identification System) feeds. The platform provides real-time vessel tracking, trajectory prediction, and data querying capabilities.

The live platform features:
- Real-time vessel tracking with position updates
- AI-powered trajectory predictions (30 minutes ahead)
- Interactive map with filtering capabilities
- Detailed vessel information on-demand
- Dark/light mode support

NAVICAST consists of four main components:
1. **AIS Data Collection**: MQTT client that connects to the Digitraffic AIS feed and stores received vessel messages in a PostgreSQL database.
2. **Vessel Prediction**: ML-based service that predicts vessel trajectories 30 minutes ahead based on current position, heading, and speed.
3. **API Server**: REST API that provides access to vessel data and predictions with filtering capabilities.
4. **Web-based Visualization**: Interactive map interface for visualizing vessels and their predicted paths.

The machine learning model uses an advanced Random Forest algorithm to predict vessel positions 30 minutes into the future. The model was trained on 363,899 vessel position records collected from the Baltic Sea region, allowing it to learn complex vessel movement patterns under various conditions.`,
    date: "2024-05-15"
  },
  {
    slug: "unsupervised-music-recommendation",
    title: "Unsupervised Music Recommendation System",
    description: "A project that leverages unsupervised machine learning to analyze Spotify track features, cluster similar songs, and generate personalized music recommendations.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Clustering Algorithms", "Dimensionality Reduction"],
    repoUrl: "https://github.com/imaddde867/unsupervised-learning-ecommerce-analysis",
    demoUrl: "",
    image: "/images/music-recommendation.png",
    longDescription: `This project applies unsupervised learning techniques to Spotify track data to identify song clusters and generate smart music recommendations. By combining clustering algorithms, dimensionality reduction, and content-based filtering, the system reveals hidden structures in musical data and suggests songs based on audio similarities.

The project utilizes several advanced techniques:

**Clustering Algorithms**
- K-Means
- Hierarchical Clustering
- DBSCAN
- Gaussian Mixture Models (GMM)

**Dimensionality Reduction**
- Principal Component Analysis (PCA)
- t-SNE
- UMAP

**Recommendation Approaches**
- Content-Based Filtering
- Collaborative Filtering (planned)
- Matrix Factorization (planned)

The analysis workflow includes:
1. Data Preprocessing – Cleaning and formatting the dataset
2. Exploratory Data Analysis (EDA) – Understanding trends and correlations
3. Feature Engineering – Extracting and refining audio features
4. Dimensionality Reduction – Visualizing patterns in lower dimensions
5. Clustering – Grouping similar songs using ML models
6. Recommendation System – Suggesting songs based on similarity
7. Insights & Evaluation – Interpreting results and findings`,
    date: "2024-04-10"
  },
  {
    slug: "clearbox-secure-messaging",
    title: "ClearBox - Secure Messaging Platform",
    description: "A secure, scalable, GDPR-compliant messaging application with encryption and real-time communication capabilities.",
    technologies: ["React", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "MQTT", "Cryptography", "WebSockets"],
    repoUrl: "https://github.com/yourusername/clearbox",
    demoUrl: "https://clearbox.live",
    image: "/images/clearbox.png",
    longDescription: `ClearBox is a full-stack secure messaging platform designed with modern security standards and user privacy at its core. The application enables real-time communication between users, supports group conversations, and ensures message delivery even when recipients are offline.

**Core Messaging Capabilities**
- User-to-User Messaging - Seamless communication between two users with message encryption
- Group Chat - Create and manage conversations with multiple participants simultaneously
- Asynchronous Messaging - Messages are stored and delivered when recipients come online
- Read Receipts - Track message delivery status
- Online Status - See when your contacts are active with real-time presence updates

**Security & Privacy**
- Encryption - Messages encrypted using Fernet symmetric encryption (cryptography library)
- Secure Authentication - JWT-based authentication with bcrypt password hashing
- Data Minimization - Only essential information collected and stored
- Account Deletion - User accounts can be deleted (GDPR compliance)
- Session Management - Token-based authentication with proper expiration
- HTTPS - All communications encrypted in transit
- Password Protection - Secure password hashing using bcrypt algorithm

**Tech Stack**
- Frontend: React 18.2.0, Axios, MQTT.js, React Router, CSS3
- Backend: FastAPI 0.104.0, SQLite (development), PostgreSQL (production), SQLAlchemy 2.0.22, JWT, MQTT (Mosquitto), Pydantic, Cryptography`,
    date: "2024-03-05"
  },
  {
    slug: "sisu-speak",
    title: "Sisu-Speak - AI Finnish Language Tutor",
    description: "An interactive Finnish language tutor that uses AI and Natural Language Processing to analyze spoken input, assess pronunciation and grammar, and provide real-time feedback.",
    technologies: ["AI", "NLP", "Speech-to-Text", "Text-to-Speech", "Pronunciation Analysis", "Audio Processing", "Language Learning"],
    repoUrl: "https://github.com/imaddde867/sisu-speak",
    demoUrl: "",
    image: "/images/sisu-speak.png",
    longDescription: `Sisu-Speak leverages AI and Natural Language Processing (NLP) to create an interactive Finnish language tutor. It analyzes spoken input from users, assesses pronunciation, grammar, and conversational context, and provides real-time feedback to help learners improve their Finnish skills.

The system captures spoken audio, processes it using speech-to-text and pronunciation analysis, and evaluates it against Finnish language rules and conversational relevance. Feedback is generated and delivered as audio to the user, creating an immersive learning experience.

**Process Description**
1. Audio Capture: Records the user's spoken Finnish input.
2. Audio Preprocessing: Cleans and prepares the raw audio data.
3. Speech-to-Text (STT): Converts audio into transcribed text.
4. Pronunciation Analysis: Assesses how accurately words are pronounced.
5. Accent Recognition: Identifies the user's accent for tailored feedback.
6. Expected Pronunciation Generation: Creates a reference pronunciation based on the transcribed text.
7. Assessment: Evaluates pronunciation accuracy, communication quality, grammar and Finnish language rules, and conversational relevance.
8. Feedback Generation: Combines assessment results into actionable feedback.
9. Text-to-Speech (TTS): Converts feedback into audio for the user.

This tool uses AI-driven NLP to provide personalized tutoring for Finnish learners, focusing on pronunciation, grammar, and practical communication skills. It's ideal for language enthusiasts or students aiming to master Finnish in a conversational context.`,
    date: "2025-03-27"
  }
]; 