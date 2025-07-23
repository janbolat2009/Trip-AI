<template>
  <div class="tour-generator">
    <div class="input-section">
      <label for="preferences" class="preferences-label">Опишите ваш идеальный тур</label>
      <textarea
        id="preferences"
        v-model="userPreferences"
        placeholder="Например: хочу в Кольсайские озера на 2 дня с хорошим отелем и трансфером из аэропорта"
        class="preferences-input"
        :disabled="loading"
      ></textarea>
      <button
        @click="generateTour"
        :disabled="loading || !userPreferences.trim()"
        class="generate-btn"
      >
        {{ loading ? 'Генерируем...' : 'Построить тур' }}
      </button>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
    <div v-if="generatedTour" class="tour-result">
      <h3>{{ generatedTour.tour.destination }}</h3>
      <p><strong>Продолжительность:</strong> {{ generatedTour.tour.duration }}</p>
      <p><strong>Стоимость:</strong> {{ generatedTour.tour.budget }}</p>
      <p><strong>Проживание:</strong> {{ generatedTour.tour.accommodation }}</p>
      <div v-if="generatedTour.tour.activities && generatedTour.tour.activities.length" class="itinerary">
        <h4>Активности:</h4>
        <ul>
          <li v-for="activity in generatedTour.tour.activities" :key="activity">{{ activity }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'TourGenerator',
  data() {
    return {
      userPreferences: '',
      generatedTour: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async generateTour() {
      if (!this.userPreferences.trim()) {
        this.error = 'Пожалуйста, опишите ваши предпочтения';
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        console.log('Sending API request with preferences:', this.userPreferences);
        const result = await apiService.generateTour(this.userPreferences);
        console.log('API response:', result);
        this.generatedTour = result;
        this.error = null;
      } catch (error) {
        this.error = 'Ошибка генерации тура. Попробуйте снова.';
        console.error('TourGenerator Error:', error.response?.data || error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.tour-generator {
  position: relative;
  margin: 600px auto 0 auto;
  max-width: 500px;
  width: 100%;
  min-width: 300px;
  padding: 32px 20px 24px 20px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(55,95,87,0.07);
}
.input-section {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
}
.preferences-label {
  font-size: 18px;
  font-weight: 600;
  color: #375f57;
  margin-bottom: -4px;
}
.preferences-input {
  min-height: 100px;
  max-height: 200px;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  border: 1.5px solid #aacfc7;
  font-size: 17px;
  background: #f8faf9;
  color: #182e25;
  box-sizing: border-box;
  transition: border 0.2s;
  outline: none;
  resize: vertical;
}
.preferences-input:focus {
  border: 1.5px solid #375f57;
  background: #ffffff;
}
.generate-btn {
  align-self: flex-end;
  background-color: #375f57;
  color: #fff;
  padding: 12px 36px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(55, 95, 87, 0.09);
  margin-top: 4px;
  transition: background 0.17s;
}
.generate-btn:disabled {
  background-color: #b6ccc7;
  cursor: not-allowed;
}
.error-message {
  color: #d24646;
  margin-top: 2px;
  font-size: 15px;
  text-align: right;
}
.tour-result {
  margin-top: 36px;
  padding: 18px 12px;
  background: #f5f9f8;
  border-radius: 16px;
  box-shadow: 0 1px 8px 0 rgba(55,95,87,0.08);
}
.tour-result h3 {
  margin-top: 0;
  color: #375f57;
}
.itinerary {
  margin-top: 10px;
}
@media (max-width: 700px) {
  .tour-generator {
    margin: 40px 0 16px 0;
    padding: 18px 4vw;
    max-width: 100vw;
    border-radius: 0;
  }
  .tour-result {
    padding: 12px 4vw;
    border-radius: 8px;
    font-size: 16px;
  }
}
</style>