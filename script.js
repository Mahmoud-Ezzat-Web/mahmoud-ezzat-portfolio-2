document.addEventListener('DOMContentLoaded', () => {
    // 1. القائمة الجانبية للموبايل (Mobile Menu)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. حاسبة مؤشر كتلة الجسم (BMI Calculator)
    const bmiForm = document.getElementById('bmiForm');
    const resultText = document.getElementById('resultText');

    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const heightInput = document.getElementById('height').value;
            const weightInput = document.getElementById('weight').value;

            if (heightInput > 0 && weightInput > 0) {
                const heightInMeters = heightInput / 100;
                const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);

                let status = '';
                let color = '';

                if (bmi < 18.5) {
                    status = 'نقص في الوزن (نحافة)';
                    color = '#ff9800';
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    status = 'وزن مثالي وطبيعي ممتاز!';
                    color = '#2e7d32';
                } else if (bmi >= 25 && bmi <= 29.9) {
                    status = 'زيادة في الوزن';
                    color = '#ff5722';
                } else {
                    status = 'سمنة مفرطة - يُنصح باستشارة الطبيب';
                    color = '#d32f2f';
                }

                resultText.innerHTML = `مؤشر كتلة جسمك هو: <strong>${bmi}</strong><br><span style="color: ${color}; font-weight: 700;">${status}</span>`;
            } else {
                resultText.textContent = 'الرجاء إدخال أقيم صحيحة للطول والوزن.';
            }
        });
    }
});