package com.example.eazystore.service;

import com.example.eazystore.dto.ProfileRequestDto;
import com.example.eazystore.dto.ProfileResponseDto;

public interface IProfileService {
    ProfileResponseDto getProfile();

    ProfileResponseDto updateProfile(ProfileRequestDto profileRequestDto);
}
