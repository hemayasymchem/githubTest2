  <template>
    <div class="export-test-container">
      <input type="file" @change="show" multiple id="input">
      <div class="show">
        <img src="" class="img-show" alt="图片" style="width: 100px; height: 100px;">
      </div>
    </div>
  </template>
  <script>
    export default {
      name: 'test',
      data() {
        return {

        }
      },
      methods: {
        show() {
          var oInput = document.getElementById('input')
          var file = oInput.files[0]
          if (!!file) {
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function() {
              document.getElementsByClassName("img-show")[0].src = this.result
            }

          }


        }
      },

    }
  </script>
