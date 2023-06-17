//tabelPendaftaran
export let isiTable = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
          <input class="w-4 h-4 bg-white rounded" type="checkbox" />
        </div>
        <div class="w-auto p-2">
            <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
        </div>
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#KDPENDAFTAR#</p>
        </div>
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
          <p class="text-xs font-semibold text-coolGray-800">#JURUSAN#</p>
          <p class="text-xs font-medium text-coolGray-500">#JENJANG#</p>
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
          <p class="text-xs font-semibold text-coolGray-800">#ALULBI#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-center">
        <div class="w-auto p-2">
          <p class="text-xs font-semibold text-coolGray-800">#ALJURUSAN#</p>
        </div>
      </div>
    </th>
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
    <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-light-1-dropdown')">
    <i class="fas fa-ellipsis-v"></i>
    </a>
    <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-light-1-dropdown">
      <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Update</a
      ><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Delete</a>
    </div>
    </th>
  </tr>
`;

//tabelJurusan
export let isiTable2 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
          <input class="w-4 h-4 bg-white rounded" type="checkbox" />
        </div>
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
    <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-light-1-dropdown')">
    <i class="fas fa-ellipsis-v"></i>
    </a>
    <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-light-1-dropdown">
      <button onclick="editData()">Edit</button>
      <button type"button" id="del_button" onclick="deleteData('#IDHAPUS')">Delete</button>
    </div>

    </th>
  </tr>
`;

//tabelSekolah
export let isiTable3 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
          <input class="w-4 h-4 bg-white rounded" type="checkbox" />
        </div>
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
    <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-light-1-dropdown')">
    <i class="fas fa-ellipsis-v"></i>
    </a>
    <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-light-1-dropdown">
      <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Update</a
      ><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Delete</a>
    </div>
    </th>
  </tr>
`;
//tabelCamaba
export let isiTable4 = `
  <tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
      <div class="flex items-center -m-2">
        <div class="w-auto p-2">
          <input class="w-4 h-4 bg-white rounded" type="checkbox" />
        </div>
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
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
    <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-light-1-dropdown')">
    <i class="fas fa-ellipsis-v"></i>
    </a>
    <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-light-1-dropdown">
      <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Update</a
      ><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Delete</a>
    </div>
    </th>
  </tr>
`;
