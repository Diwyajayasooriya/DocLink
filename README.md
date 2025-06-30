# DocLink
Digital medicine



### Branch Descriptions:

1. **`main`**  
   - Protected branch (direct commits disabled)  
   - Contains production-ready code  
   - Only updated via PRs from `dev`

2. **`dev`**  
   - Primary development branch  
   - All feature branches merge here first  
   - Used for staging/testing before production

3. **Feature Branches** (from `dev`):
   - `user-login` - Authentication system implementation  
   - `patient-dashboard` - Main patient interface  
        - `patient-dashboard-choose-doctor` - Doctor selection component  
   - `feature/book-appointment-page` - Appointment scheduling system


### Workflow Rules:
- Always create new branches from `dev`  
- Prefix feature branches with `feature/` when appropriate  
- Open PRs to `dev` for code review  
- Squash merge feature branches  
- Only merge `dev` into `main` for releases