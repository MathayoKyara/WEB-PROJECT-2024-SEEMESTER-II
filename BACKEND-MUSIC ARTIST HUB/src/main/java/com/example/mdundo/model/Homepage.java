package com.example.mdundo.model;

import jakarta.persistence.*;

@Entity
@Table(name="User")
public class Homepage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ProfilePicture;
    private String Bio;
    private String AudioTrack;
    private String VideoTrack;
    private String ArtistPlan;
    private String StudioDetails;

    public Homepage() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProfilePicture() {
        return ProfilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        ProfilePicture = profilePicture;
    }

    public String getBio() {
        return Bio;
    }

    public void setBio(String bio) {
        Bio = bio;
    }

    public String getAudioTrack() {
        return AudioTrack;
    }

    public void setAudioTrack(String audioTrack) {
        AudioTrack = audioTrack;
    }

    public String getVideoTrack() {
        return VideoTrack;
    }

    public void setVideoTrack(String videoTrack) {
        VideoTrack = videoTrack;
    }

    public String getArtistPlan() {
        return ArtistPlan;
    }

    public void setArtistPlan(String artistPlan) {
        ArtistPlan = artistPlan;
    }

    public String getStudioDetails() {
        return StudioDetails;
    }

    public void setStudioDetails(String studioDetails) {
        StudioDetails = studioDetails;
    }

    {
    }
}

