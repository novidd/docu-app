export interface BaseItem {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Folder extends BaseItem {
  type: 'folder';
  isOpen: boolean;
  children: Array<Folder | Note>;
}

export interface Note extends BaseItem {
  type: 'note';
  content: string;
}
