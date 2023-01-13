<template>
  <div class="animal-input">
    <p class="instructions">
      // TODO modifer ce composant pour permettre de modifier l'animal et de le
      sauvegarder via le store      
    </p>
    <ul class="instructions">
        <li>Nom de l'animal: string</li>
        <li>Age de l'animal: integer > 0</li>
        <li>Espèce de l'animal: string parmi {Chat, Chien, Lapin}</li>
        <li>
            Dernier rdv chez le vétérinaire (// TODO Créer un modèle AppointementModel dans le store)
            <ul>
                <li>
                    Date du rdv: Date
                </li>
                <li>
                    Type de rdv: string parmi {contrôle, blessure, vaccin}
                </li>
            </ul>
        </li>
    </ul>
    <br />
    <button @click="onSave">Sauvegarder</button>
  </div>
</template>

<script>
export default {
  methods: {
    onSave() {
      this.$emit('save')
    }
  }
}
</script>

<style>
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
}
</style>