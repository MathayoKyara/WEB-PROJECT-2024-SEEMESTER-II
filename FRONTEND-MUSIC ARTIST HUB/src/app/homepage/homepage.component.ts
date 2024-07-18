import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
submitHomepageData() {
throw new Error('Method not implemented.');
}

  ngOnInit(): void {
    // Initialize any required data or state here
  }

  // Method to preview the profile picture
  previewProfilePicture(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const output = document.getElementById('profile-picture') as HTMLImageElement;
        if (output) {
          output.src = reader.result as string;
        } else {
          console.error('Element with ID "profile-picture" not found.');
        }
      };

      reader.onerror = () => {
        console.error('Error reading file.');
      };

      reader.readAsDataURL(file);
    } else {
      console.error('No file selected or input is not a file input.');
    }
  }

  // Method to save the bio
  saveBio(): void {
    const bioElement = document.getElementById('bio-text') as HTMLTextAreaElement;
    if (bioElement) {
      const bioText = bioElement.value;
      localStorage.setItem('bio', bioText);
      alert('BIO saved successfully');
    } else {
      console.error('Element with ID "bio-text" not found.');
    }
  }

  // Method to edit the bio
  editBio(): void {
    const bioElement = document.getElementById('bio-text') as HTMLTextAreaElement;
    if (bioElement) {
      const bioText = localStorage.getItem('bio');
      bioElement.value = bioText || '';
    } else {
      console.error('Element with ID "bio-text" not found.');
    }
  }

  // Method to view the bio
  viewBio(): void {
    const bioText = localStorage.getItem('bio');
    if (bioText) {
      alert('Bio: ' + bioText);
    } else {
      alert('No bio saved.');
    }
  }

  // Method to attach audio
  attachAudio(): void {
    const audioInput = document.getElementById('audioInput') as HTMLInputElement;
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    const viewButton = document.getElementById('view');

    if (audioInput && audioInput.files && audioInput.files.length > 0) {
      const fileURL = URL.createObjectURL(audioInput.files[0]);
      if (audioPlayer) {
        audioPlayer.src = fileURL;
        viewButton?.addEventListener('click', () => {
          audioPlayer.play();
        });
      } else {
        console.error('Audio player element not found.');
      }
    } else {
      console.error('No audio file selected or audio input element not found.');
    }
  }

  // Method to save audio
  saveAudio(): void {
    alert('Your audio file saved successfully');
  }

  // Method to attach video
  attachVideo(): void {
    const videoInput = document.getElementById('videoInput') as HTMLInputElement;
    const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;
    const viewButton = document.getElementById('view');

    if (videoInput && videoInput.files && videoInput.files.length > 0) {
      const fileURL = URL.createObjectURL(videoInput.files[0]);
      if (videoPlayer) {
        videoPlayer.src = fileURL;
        viewButton?.addEventListener('click', () => {
          videoPlayer.play();
        });
      } else {
        console.error('Video player element not found.');
      }
    } else {
      console.error('No video file selected or video input element not found.');
    }
  }

  // Method to save video
  saveVideo(): void {
    alert('Video saved successfully');
  }

  // Method to view uploaded files (PDF/Word)
  viewUploadedFile(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (!file) {
      console.error('No file selected or input element not found.');
      return;
    }

    const viewerId = `${type}-viewer`;
    let viewer = document.getElementById(viewerId);

    if (!viewer) {
      viewer = document.createElement('div');
      viewer.id = viewerId;
      document.body.appendChild(viewer);
    }

    if (file.type === 'application/pdf') {
      const pdfFrame = document.createElement('iframe');
      pdfFrame.style.width = '100%';
      pdfFrame.style.height = '500px';
      pdfFrame.src = URL.createObjectURL(file);
      viewer.innerHTML = ''; // Clear previous content
      viewer.appendChild(pdfFrame);
    } else if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // Display the Word document using an alternative method, e.g., use a library or service
      alert('Displaying Word documents is not supported in this way.');
    } else {
      alert('Unsupported file type');
    }
  }

  // Method to upload plans
  uploadPlans(): void {
    alert('Plans document uploaded successfully');
  }

  // Method to save plans
  savePlans(): void {
    alert('Plans document saved successfully');
  }

  // Method to upload studio details
  uploadStudio(): void {
    alert('Studio detail document uploaded successfully');
  }

  // Method to save studio details
  saveStudio(): void {
    alert('Studio document saved successfully');
  }
}
