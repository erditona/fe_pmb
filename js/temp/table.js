//tabelPendaftaran
export let isiTable = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
            <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
        </div>
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#KDPENDAFTAR#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
      <div class="w-auto p-2 flex items-center justify-between">
        <p>#STATUS#</p>
        <a type="button" href="edit-status.html?pendaftaranId=#IDSTATUS#" class="btn-edit">
          <i class="fas fa-edit mr-1" class="fa-light fa-pen-to-square" style="color: #9d174d;"></></i>
        </a>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
          <p class="text-xs font-medium text-coolGray-500">#NOHP#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#SEKOLAH#</p>
          <p class="text-xs font-medium text-coolGray-500">#NOHPSEKOLAH#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#JALUR#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#JURUSAN#</p>
          <p class="text-xs font-medium text-coolGray-500">#JENJANG#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#ALULBI#</p>
          <p class="text-xs font-semibold text-coolGray-800">#ALJURUSAN#</p>
        </div>
      </div>
    </th>

    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
        <div class="btn-container">
            <a type="button" href="edit-pendaftaran.html?pendaftaranId=#IDEDIT#" class="btn-edit">
                <i class="fas fa-edit mr-1" style="color: #9d174d;"> Edit</i>
            </a>
        </div>
        <div class="btn-container">
            <button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')" class="btn-delete">
                <i class="fas fa-trash-alt mr-1" style="color: #9d174d;"></i> Delete
            </button>
        </div>
    </th>

    <style>
        .btn-container {
          margin-top: 5px;
      }  
    </style>
  </tr>
`;

//tabelJurusan
export let isiTable2 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
            <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
        </div>
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#KDJURUSAN#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#JENJANG#</p>
        </div>
      </div>
    </th>

    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
        <a type="button" href="edit-jurusan.html?jurusanId=#IDEDIT#" class="btn-edit">
            <i class="fas fa-edit mr-1"></i> Edit
        </a>
        <button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')" class="btn-delete">
            <i class="fas fa-trash-alt mr-1"></i> Delete
        </button>
    </th>

    <style>
        .btn-edit {
            margin-right: 10px;
        }

        .btn-delete {
            margin-left: 10px;
        }
    </style>
  </tr>
`;

//tabelSekolah
export let isiTable3 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
            <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
        </div>
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#KDSEKOLAH#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NOHP#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#ALAMAT#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
        <a type="button" href="edit-sekolah.html?sekolahId=#IDEDIT#" class="btn-edit">
            <i class="fas fa-edit mr-1"></i> Edit
        </a>
        <button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')" class="btn-delete">
            <i class="fas fa-trash-alt mr-1"></i> Delete
        </button>
    </th>

    <style>
        .btn-edit {
            margin-right: 10px;
        }

        .btn-delete {
            margin-left: 10px;
        }
    </style>
  </tr>
`;

//tabelCamaba
export let isiTable4 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
            <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
        </div>
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#KTP#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#NOHP#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#ALAMAT#</p>
        </div>
      </div>
    </th>
  </tr>
`;
