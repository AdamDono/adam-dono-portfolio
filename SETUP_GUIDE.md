# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies (if needed)
```bash
npm install
```

### 2. Run the Application
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

---

## ⚙️ Required Setup Steps

### Step 1: Add Your Resume PDF
Create the assets folder structure and add your resume:

```bash
mkdir -p src/assets/resume
```

Then add your resume PDF as: `src/assets/resume/Adam-Dono-Resume.pdf`

**Alternative**: If you want to use a different filename, update line 12 in:
`src/app/components/resume/resume.component.ts`

---

### Step 2: Change Analytics Password
**IMPORTANT**: Change the default password for security!

File: `src/app/components/analytics-dashboard/analytics-dashboard.component.ts`

Line 20:
```typescript
private readonly ADMIN_PASSWORD = 'admin123'; // Change this!
```

Change to your secure password:
```typescript
private readonly ADMIN_PASSWORD = 'YourSecurePassword123!';
```

---

### Step 3: Add Real Testimonials
Update testimonials with real client feedback:

File: `src/app/services/data.service.ts`

Lines 68-98: Update the testimonials array with real data.

**Optional**: Add client avatar images to `src/assets/images/` and update the `avatarUrl` fields.

---

### Step 4: Add Case Studies to Your Projects
Edit your projects in: `src/app/components/portfolio/portfolio.component.ts`

Add `caseStudy` object to any project:

```typescript
{
  id: X,
  title: 'Your Project',
  // ... existing fields
  caseStudy: {
    problem: 'What problem did you solve?',
    solution: 'How did you solve it?',
    results: 'What were the outcomes?',
    metrics: [
      { 
        label: 'User Engagement', 
        value: '+40%', 
        icon: 'fas fa-users' 
      },
      // Add more metrics...
    ],
    beforeImage: 'url-to-before-screenshot',
    afterImage: 'url-to-after-screenshot',
    testimonial: {
      quote: 'Client testimonial about this project',
      author: 'Client Name',
      role: 'Client Position'
    }
  }
}
```

**Note**: Projects 5 and 7 already have example case studies you can reference.

---

## 🎨 Customization Tips

### Update Resume Highlights
File: `src/app/components/resume/resume.component.html`

Lines 20-35: Update the highlight stats to match your experience.

### Customize Testimonial Carousel
The carousel auto-rotates through testimonials. To change behavior:

File: `src/app/components/testimonials/testimonials.component.ts`

Add auto-rotation if desired (currently manual navigation only).

### Modify Analytics Tracking
File: `src/app/services/analytics.service.ts`

Customize what gets tracked or add new tracking events.

---

## 🧪 Testing Your Changes

### Test Testimonials
1. Navigate to the testimonials section
2. Click prev/next buttons
3. Click dots to jump to specific testimonials
4. Test on mobile (should be responsive)

### Test Analytics
1. Navigate to `http://localhost:4200/analytics`
2. Enter password
3. Browse your portfolio
4. Open some case studies
5. Return to analytics to see tracked data

### Test Resume
1. Scroll to resume section
2. Click "Download Resume" (should download)
3. Click "View Online" (should open modal)
4. Click "Open in New Tab" (should open in new tab)
5. Test modal close functionality

### Test Case Studies
1. Find projects with "Case Study" badge
2. Click "View Case Study" button
3. Verify all sections display correctly
4. Test on mobile
5. Verify close button works

### Test Loading States
1. Refresh the page
2. Watch for loading spinner in portfolio section
3. Should disappear after ~800ms

---

## 📱 Mobile Testing

Test all features on mobile:
```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
# or
hostname -I  # Linux

# Access from mobile
http://YOUR_IP:4200
```

---

## 🐛 Common Issues

### Issue: Resume doesn't download
**Solution**: Ensure PDF exists at `src/assets/resume/Adam-Dono-Resume.pdf`

### Issue: Analytics password doesn't work
**Solution**: Check you changed it in the right file and restarted the dev server

### Issue: Case studies don't show
**Solution**: Verify the project has a `caseStudy` object with all required fields

### Issue: Images don't load
**Solution**: Check image URLs are valid and accessible

### Issue: Routing doesn't work
**Solution**: Ensure you're using `ng serve` and not a static file server

---

## 🎯 Next Steps After Setup

1. ✅ Add your resume PDF
2. ✅ Change analytics password
3. ✅ Update testimonials with real data
4. ✅ Add case studies to 3-5 key projects
5. ✅ Replace placeholder images with real screenshots
6. ✅ Test all features thoroughly
7. ✅ Test on mobile devices
8. ✅ Deploy to production

---

## 📊 Features Overview

### New Sections Added (in order):
1. Hero
2. About
3. Services
4. **Portfolio** (enhanced with case studies)
5. **Testimonials** (NEW)
6. GitHub Activity
7. Skills
8. Experience/Education
9. **Resume** (NEW)
10. Contact

### New Routes:
- `/` - Main portfolio (default)
- `/analytics` - Analytics dashboard (password protected)

---

## 💡 Pro Tips

1. **Analytics**: Check your analytics weekly to see which projects get the most attention
2. **Case Studies**: Add case studies to your 3-5 best projects for maximum impact
3. **Testimonials**: Aim for 4-6 testimonials from diverse clients/projects
4. **Resume**: Keep your resume PDF updated and ensure it matches your portfolio
5. **Images**: Use high-quality screenshots for before/after comparisons

---

## 🔒 Security Notes

- Analytics password is stored in the component (client-side)
- For production, implement proper backend authentication
- Analytics data is stored in browser localStorage
- Consider adding server-side analytics for production

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify all files are in correct locations
3. Ensure dev server is running
4. Try clearing browser cache/localStorage
5. Check the NEW_FEATURES.md file for detailed documentation

---

**Happy Coding! 🚀**
